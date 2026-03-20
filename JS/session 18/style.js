
let products = [];
let idCounter = 1;
let editingId = null;

const form = document.getElementById("productForm");
const nameInput = document.getElementById("productName");
const categoryInput = document.getElementById("productCategory");
const priceInput = document.getElementById("productPrice");
const quantityInput = document.getElementById("productQuantity");
const descriptionInput = document.getElementById("productDescription");

const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

const tableBody = document.getElementById("productTableBody");
const emptyState = document.getElementById("emptyState");

const totalProducts = document.getElementById("totalProducts");
const totalValue = document.getElementById("totalValue");
const totalQuantity = document.getElementById("totalQuantity");

const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const formTitle = document.getElementById("formTitle");

function saveToStorage() {
  localStorage.setItem(
    "products_data",
    JSON.stringify({ products, idCounter })
  );
}

function loadFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem("products_data"));
    if (data) {
      products = data.products || [];
      idCounter = data.idCounter || 1;
    }
  } catch (err) {
    console.error("Lỗi load localStorage:", err);
    products = [];
    idCounter = 1;
  }
}

function validate(name, category, price, quantity) {
  if (!name.trim()) return "Tên sản phẩm không được để trống";
  if (!category) return "Vui lòng chọn danh mục";
  if (price < 0 || isNaN(price)) return "Giá không hợp lệ";
  if (!Number.isInteger(quantity) || quantity < 0)
    return "Số lượng không hợp lệ";
  return null;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const category = categoryInput.value;
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);
  const description = descriptionInput.value.trim();

  const error = validate(name, category, price, quantity);
  if (error) {
    alert(error);
    return;
  }

  if (editingId) {
    // UPDATE
    const p = products.find((item) => item.id === editingId);
    p.name = name;
    p.category = category;
    p.price = price;
    p.quantity = quantity;
    p.description = description;
    p.updatedAt = new Date().toISOString();

    resetForm();
  } else {
    // ADD
    const newProduct = {
      id: idCounter++,
      name,
      category,
      price,
      quantity,
      description,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    products.push(newProduct);
  }

  saveToStorage();
  render();
  form.reset();
});

function editProduct(id) {
  const p = products.find((item) => item.id === id);
  if (!p) return;

  editingId = id;

  nameInput.value = p.name;
  categoryInput.value = p.category;
  priceInput.value = p.price;
  quantityInput.value = p.quantity;
  descriptionInput.value = p.description;

  formTitle.innerText = "Chỉnh Sửa Sản Phẩm";
  submitBtn.innerText = " Cập Nhật";
  cancelBtn.style.display = "inline-block";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

cancelBtn.addEventListener("click", resetForm);

function resetForm() {
  editingId = null;
  form.reset();

  formTitle.innerText = "Thêm Sản Phẩm Mới";
  submitBtn.innerText = " Thêm Sản Phẩm";
  cancelBtn.style.display = "none";
}

function deleteProduct(id) {
  const p = products.find((item) => item.id === id);
  if (!confirm(`Xóa sản phẩm "${p.name}"?`)) return;

  products = products.filter((item) => item.id !== id);

  if (editingId === id) resetForm();

  saveToStorage();
  render();
}

clearAllBtn.addEventListener("click", function () {
  if (!confirm("Xóa tất cả sản phẩm? Không thể hoàn tác!")) return;

  products = [];
  idCounter = 1;

  localStorage.removeItem("products_data");

  resetForm();
  render();
});

function getFilteredProducts() {
  const keyword = searchInput.value.toLowerCase();
  const category = filterCategory.value;

  return products.filter((p) => {
    const matchKeyword =
      p.name.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword);

    const matchCategory = !category || p.category === category;

    return matchKeyword && matchCategory;
  });
}

function render() {
  const list = getFilteredProducts();

  if (list.length === 0) {
    tableBody.innerHTML = "";
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";

    tableBody.innerHTML = list
      .map(
        (p) => `
        <tr>
          <td>${p.id}</td>
          <td><strong>${p.name}</strong></td>
          <td>${p.category}</td>
          <td class="price">${p.price.toLocaleString()} ₫</td>
          <td class="quantity ${
            p.quantity < 10 ? "low-stock" : ""
          }">${p.quantity}</td>
          <td class="description">${p.description || ""}</td>
          <td>
            <div class="action-buttons">
              <button class="btn-edit" onclick="editProduct(${p.id})">✏️ Sửa</button>
              <button class="btn-delete" onclick="deleteProduct(${p.id})">🗑️ Xóa</button>
            </div>
          </td>
        </tr>
      `
      )
      .join("");
  }

  renderStats();
}

function renderStats() {
  let totalP = products.length;
  let totalQ = 0;
  let totalV = 0;

  products.forEach((p) => {
    totalQ += p.quantity;
    totalV += p.price * p.quantity;
  });

  totalProducts.innerText = totalP;
  totalQuantity.innerText = totalQ;
  totalValue.innerText = totalV.toLocaleString() + " ₫";
}

searchInput.addEventListener("input", render);
filterCategory.addEventListener("change", render);

// ================== INIT ==================
function init() {
  loadFromStorage();
  render();
}

init();