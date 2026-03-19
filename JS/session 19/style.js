
let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    img: "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h",
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    description: "Switch blue",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
     localStorage.setItem("cart", JSON.stringify(cart));
}
 
function formatVND(num) {
  return num.toLocaleString() + " VNĐ";
}

let renderProducts = () => {
  let productsGrid = document.getElementById("products-grid");

  let html = "";
  products.forEach((product) => {
    html += `
      <article class="card">
        <div class="card-img">
          <img src="${product.img}" />
        </div>
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="card-footer">
            <div class="price">${formatVND(product.price)}</div>
            <button onclick="addToCart(${product.id})">
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </article>
    `;
  });

  productsGrid.innerHTML = html;
};

let addToCart = (id) => {
  let product = products.find((p) => p.id === id);

  let item = cart.find((c) => c.productId === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({
      productId: id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  saveCart();
  renderCart();
};

let increase = (id) => {
  let item = cart.find((c) => c.productId === id);
  item.quantity++;

  saveCart();
  renderCart();
};


let decrease = (id) => {
  let item = cart.find((c) => c.productId === id);

  item.quantity--;

  if (item.quantity <= 0) {
    cart = cart.filter((c) => c.productId !== id);
  }

  saveCart();
  renderCart();
};

let onDelete = (id) => {
  if (!confirm("Xóa sản phẩm?")) return;

  cart = cart.filter((c) => c.productId !== id);

  saveCart();
  renderCart();
};


document.getElementById("clear-cart-btn").onclick = () => {
  if (!confirm("Xóa toàn bộ giỏ hàng?")) return;

  cart = [];
  localStorage.removeItem("cart");

  renderCart();
};

let renderCart = () => {
  let cartTbody = document.getElementById("cart-tbody");

  let statLines = document.getElementById("stat-lines");
  let statQty = document.getElementById("stat-qty");
  let statTotal = document.getElementById("stat-total");

  let html = "";

  let totalQty = 0;
  let totalMoney = 0;

  cart.forEach((item) => {
    totalQty += item.quantity;
    totalMoney += item.price * item.quantity;

    html += `
      <tr>
        <td>${item.name}</td>
        <td class="right">${formatVND(item.price)}</td>
        <td class="center">
          <button onclick="decrease(${item.productId})">-</button>
          ${item.quantity}
          <button onclick="increase(${item.productId})">+</button>
        </td>
        <td class="right">${formatVND(item.price * item.quantity)}</td>
        <td class="center">
          <button onclick="onDelete(${item.productId})">Xóa</button>
        </td>
      </tr>
    `;
  });

  cartTbody.innerHTML = html;

  statLines.innerText = cart.length;
  statQty.innerText = totalQty;
  statTotal.innerText = formatVND(totalMoney);
};

renderProducts();
renderCart();