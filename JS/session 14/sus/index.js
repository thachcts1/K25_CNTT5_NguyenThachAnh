const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
let renderProducts =(products) =>{
    let productList = document.getElementById("products-list");
    let html ="";
    products.forEach((prod) =>{
 html+=`
    <li>
        <div class="product">
            <span class="product-name">${prod.name}</span>
            <span class="product-price">${prod.price}</span>
            <button class="delete-btn" onClick="deleteProduct(${prod.id})">Xóa</button>
        </div>
    </li>`
    });
   productList.innerHTML=html;

};
renderProducts();

let newId= (products) =>{
    let max = products[0].id;
    products.forEach((prod) =>{
        if(prod.id > max){
            max = prod.id;
        }
    });
    return max +1;
};

let addNewProduct =(e) =>{
    e.preventDefault();
    let inputName = document.getElementById(`product-name`).value;
    let inputPrice = document.getElementById(`product-price`).value;
    let newProduct = {
        id: newId(products) ,
          name: inputName,
        price: +inputPrice
     };
     products.unshift(newProduct);
     renderProducts(products);
};


let deleteProduct =(id) =>{
    let deleteProd = products.findIndex((P) => P.id ==id);
    if(confirm(`Bạn có  xoá không`)){
        products.splice(deleteProd, 1);
        renderProducts(products);
    }elsse{
        return;
    }
};
let updateProductPrice = (id) => {
    let editProd = products.findIndex((p)  => p.id == id);
    let newPrice = prompt(` nhập giá mới(VND): `).trim();
    if(newPrice === "" || +newPrice < 0 || isNaN(+newPrice)){
        alert(` Giá trị vừa nhập không hợp lệ`);

    } elsse{
        products[editProd].price = +newPrice;
        renderProducts(products);
        alert(` Đã sửa thành công`);
    }
}

let inputData = document.getElementById(` search-input`);
inputData.addEventListener(`input`, (e) =>{
    let keyword = inputData.value.toLowerCase();

    console.log(keyword);
    let searchItem = products.filter((p) =>{
        return p.name.toLowerCase().includes(keyword);
    });
    console.log(searchItem);
    renderProducts(searchItem);
});

let sortLowToUp =(e) => {
    e.preventDefault();
}