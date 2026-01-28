let bookTitle = prompt("Nhập tên sách: ");
let bookId = prompt("Số thứ tự của sách: ");

//lưu tên sách gốc
let originalBook = bookTitle;

bookTitle = bookTitle.trim() .toUpperCase();

let bookCode = `LIB-${bookTitle}-${bookId}`;

console.log("Tên sách gốc:",originalBook);
console.log("mã sách sau chuẩn hóa:",bookCode);