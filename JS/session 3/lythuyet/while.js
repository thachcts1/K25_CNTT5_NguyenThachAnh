/* 
    Vòng lặp while
    1. Khi nào dùng? không biết trước số lần lặp
    2. Cú pháp : while(condition){
    
    }
    3. Luồng hoạt động: Khi điều kiện đúng thì chạy, điều kiện sai thì dừng


*/

let password;
password = prompt("Nhập password");
while (password = "12345") {
    password = prompt("Nhập lại password");
}
console.log("chào admin");
