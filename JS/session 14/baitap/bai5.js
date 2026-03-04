const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 }
];

const productList = document.getElementById("product-list");
products.forEach(product => {

    const li = document.createElement("li");
    li.className = "product-item";

    li.textContent = `${product.name} - ${product.price.toLocaleString()} VND`;

    productList.appendChild(li);

});

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {

    let keyword = searchInput.value.toLowerCase();

    let items = document.querySelectorAll(".product-item");

    items.forEach(item => {

        let name = item.textContent.toLowerCase();

        if(name.includes(keyword)){
            item.style.display = "list-item";
        }else{
            item.style.display = "none";
        }

    });

});