let nameBook = prompt("Nhập tên sách");
let publish = prompt("năm xuất bản của sách");
 publish = Number(publish);
let currentYear = prompt("Nhập năm hiện tại");
let ageBook = currentYear - publish;
console.log("Sách:",nameBook);
console.log("Năm xuất bản:",publish);
console.log(`Tuổi của sách: ${ageBook} năm`);