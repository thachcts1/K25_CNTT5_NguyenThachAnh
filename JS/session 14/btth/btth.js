let products = [
    {id:1,
     name: "Bánh chưng thanh khúc",
     price: 150.000
    },
    {id:2,
     name: "Giò",
     price: 180.000
    },
    {id:3,
     name: "Cành đào",
     price: 500.000
    },
    {id:4,
     name: "Mứt tết",
     price: 120.000
    },
    {id:5,
     name: "Lì xì may mắn",
     price: 150.000
    },
    {id:6,
     name: "Dưa hấu",
     price: 60.000
    }
];
// tạo hàm hiển thị danh sách sp
function renderProducts() {
    let html ="";
    for (let i = 0; i < products.length; i++) {
        html += `<div class="product-card">
                    <img src="/img/banhchung.webp" alt="">
                    <h3>${products[i].name}</h3>
                    <p class="price">${products[i].price}</p>
                    <button class="btn-add" >Thêm vào giỏ</button>
                </div>`

    }
    document.getElementById("product-list").innerHTML =html;
}
renderProducts();
function renderCard (){
    let str =""
    
}
