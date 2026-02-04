let booksId = [];
let booksName = [];
let inventoryQuantity = [];
let question;
do {
    question = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay? "));
} while (isNaN(question) || question <= 0);

for (let i = 0; i < question; i++) {
    let id, name, quantity;

    do {
        id = prompt(`Nhập mã sách thứ ${i + 1}:`).trim();
    } while (id === "");

    do {
        name = prompt(`Nhập tên sách thứ ${i + 1}:`).trim();
    } while (name === "");

    do {
        quantity = parseInt(prompt(`Nhập số lượng tồn kho của sách thứ ${i + 1}:`));
    } while (isNaN(quantity) || quantity < 0);

    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(quantity);
}

console.log(`Danh sách sách cần xem xét bổ sung (${booksId.length} loại):`);

for (let i = 0; i < booksId.length; i++) {
    console.log(`${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản`);
}

let count = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        count++;
    }
}

let finishedBook = [];
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        finishedBook.push(booksId[i]);
    }
}
console.log(`Số sách có tồn kho ≤ 5 bản: ${count} loại`);

if (finishedBook.length > 0) {
    console.log(`Các mã sách đã hết hàng (0 bản): ${finishedBook.join(", ")}`);
} else {
    console.log("Không có sách nào đã hết hàng");
}
