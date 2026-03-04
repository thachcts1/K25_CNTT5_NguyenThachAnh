const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const listDiv = document.createElement("div");
    listDiv.innerHTML = `<li>${product.name} - ${product.price.toLocaleString()} VND</li>`;
    productList.appendChild(listDiv);
});

const form = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productLists = document.getElementById("product-list");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = productNameInput.value;
    const price = productPriceInput.value;

    if(name === "" || price === ""){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const newProduct = {name,price};

    const li = document.createElement("li");
    li.className = "product-item";

    li.textContent = `${newProduct.name} - ${newProduct.price} VND`;

    productLists.appendChild(li);

    productNameInput.value = "";
    productPriceInput.value = "";

});