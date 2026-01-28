let nameBook = prompt("Nhập tên của một cuốn sách");

let capitalized = nameBook.trim().toUpperCase(); //Tên viết hoa

let normalName = nameBook.trim().toLowerCase(); // tên viết thg

console.log("tên sách ban đầu:",nameBook);
console.log("tên sách sau khi viết thường:",normalName);
console.log("tên sách sau khi viết hoa:",capitalized);