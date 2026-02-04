let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];
let question;

do {
    question = parseInt(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));
} while (isNaN(question) || question <= 0);

for (let i = 0; i < question; i++) {
    let id, name, category, quantity;

    do {
        id = prompt(`Nhập mã sách thứ ${i + 1}:`);
        if (id === null || id.trim() === "") continue;

        let isDuplicate = false;
        for (let j = 0; j < booksId.length; j++) {
            if (booksId[j] === id) {
                isDuplicate = true;
                alert("Mã sách đã tồn tại, vui lòng nhập mã khác!");
                break;
            }
        }
        if (!isDuplicate) break;
    } while (true);

    do {
        name = prompt(`Nhập tên sách thứ ${i + 1}:`);
    } while (name === null || name.trim() === "");

    do {
        category = prompt(
            `Nhập các thể loại của sách thứ ${i + 1} (cách nhau bởi dấu phẩy):`
        );
    } while (category === null || category.trim() === "");

    do {
        quantity = parseInt(
            prompt(`Nhập số lượng tồn kho của sách thứ ${i + 1}:`)
        );
    } while (isNaN(quantity) || quantity < 0);

    booksId.push(id);
    booksName.push(name);
    booksCategory.push(category);
    inventoryQuantity.push(quantity);
}

console.log("=== DANH SÁCH SÁCH ĐÃ NHẬP ===");
for (let i = 0; i < booksId.length; i++) {
    console.log(
        `${i + 1}. Mã: ${booksId[i]} | Tên: ${booksName[i]} | Thể loại: ${booksCategory[i]} | Tồn kho: ${inventoryQuantity[i]}`
    );
}

let count = 0;
for (let i = 0; i < booksCategory.length; i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")) {
        count++;
    }
}
console.log(`Tổng số sách thuộc thể loại "Lập trình": ${count}`);

console.log('\nCác mã sách thuộc cả hai thể loại "JavaScript" và "Web":');
let found = false;

for (let i = 0; i < booksCategory.length; i++) {
    let categoryLower = booksCategory[i].toLowerCase();
    if (
        categoryLower.includes("javascript") &&
        categoryLower.includes("web")
    ) {
        console.log(booksId[i]);
        found = true;
    }
}
if (!found) {
    console.log("Không có sách nào thỏa điều kiện.");
}

let minIndex = 0;
for (let i = 1; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
        minIndex = i;
    }
}
console.log("Sách có số lượng tồn kho thấp nhất:");
console.log(
    `Mã: ${booksId[minIndex]} | Tên: ${booksName[minIndex]} | Tồn kho: ${inventoryQuantity[minIndex]}`
);
