let bookName = prompt("mời nhập tên danh sách").trim().toUpperCase();
// console.log("bookName", bookName);

let bookAuthor = prompt("Mời nhập tên tác giả").toUpperCase();

let year = prompt("nhập năm xuất bản");

let bookId= bookAuthor.trim().slice(0,3) + year + "-" + (Math.floor(Math.random() * 1000) +1 );
console.log("bookId", bookId);

let price = prompt(" nhập giá tiền 1 cuốn sách");
let quantity = prompt("số lượng nhập kho");

let bookYear = new Date().getFullYear() - year;
console.log("sách đã xuất bản được số năm là:", bookYear);
let total= quantity*price;
//temlate string
console.log(`tổng giá trị nhập kho là: ${total}`);