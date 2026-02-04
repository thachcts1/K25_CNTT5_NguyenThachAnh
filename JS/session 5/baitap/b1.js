let bookList = [];
let totalBooks = parseInt(prompt("Bạn muốn trả bao nhiêu cuốn sách ? "));

for (let index = 0; index < totalBooks; index++) {
    let bookTitle = prompt(`Nhập tên sách thứ ${index + 1}:`);
    bookList.push(bookTitle);
}

console.log("Tổng số sách đã được trả:", bookList.length);

console.log("Tất cả tên sách trong danh sách:");
for (let i = 0; i < bookList.length; i++) {
    console.log(`${i + 1}. ${bookList[i]}`);
}
