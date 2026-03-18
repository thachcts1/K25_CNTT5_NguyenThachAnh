let products=[
    {id:1,name:"bánh trưng",price:5000},
    {id:2,name:"giò lụa",price:6000},
    {id:3,name:"bánh đa",price:7000},
    {id:4,name:"gà luộc",price:8000},
    {id:5,name:"dưa hấu",price:9000},
    {id:6,name:"chè bưởi",price:10000}
];

let cart=[];

function loadCart(){
    let data=localStorage.getItem("cart");
    if(data){
        cart=JSON.parse(data);
    }else{
        cart=[];
    }
}

function saveCart(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

function renderProducts(){
    let str="";
    for (let i = 0; i < products.length; i++) {
        str+=`
        <div class="product-card">
            <img src="/img/banhchung.webp" alt="">
            <h3>${products[i].name}</h3>
            <p class="price">${products[i].price}</p>
            <button class="btn-add" onclick="addToCart(${products[i].id})">Thêm vào giỏ</button>
        </div>`;
    }
    document.getElementById("product-list").innerHTML=str;
}

function renderCart(){
    let cartList=document.getElementById("cart-list");
    let total=0;
    let str="";

    if(cart.length===0){
        cartList.innerHTML=`<li class="empty-msg">Chưa có món nào...</li>`;
        document.getElementById("total-price").innerText="0đ";
        return;
    }

    for(let i=0;i<cart.length;i++){
        total+=cart[i].price;
        str+=`
        <li>
            <span class="cart-item-name">${cart[i].name}</span>
            <div>
                <span class="cart-item-price">${cart[i].price}</span>
                <button class="btn-remove" onclick="removeItem(${i})">X</button>
            </div>
        </li>`;
    }

    cartList.innerHTML=str;
    document.getElementById("total-price").innerText=total+"đ";
}

function addToCart(id){
    let product=products.find(p=>p.id===id);
    cart.push(product);
    saveCart();
    renderCart();
}

function removeItem(index){
    cart.splice(index,1);
    saveCart();
    renderCart();
}

function checkout(){
    if(cart.length===0){
        alert("Giỏ hàng đang trống");
        return;
    }
    alert("Đã thanh toán thành công");
    localStorage.removeItem("cart");
    cart=[];
    renderCart();
}

document.getElementById("btn-checkout").onclick=checkout;

loadCart();
renderProducts();
renderCart();