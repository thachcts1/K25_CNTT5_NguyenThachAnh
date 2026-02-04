let lateBooks = [];
let totalLate = parseInt(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));

for (let idx = 0; idx < totalLate; idx++) {
    let title = prompt(`Nhập tên sách thứ ${idx + 1}:`);
    lateBooks.push(title);
}

console.log("Tổng số sách bị trả muộn:", lateBooks.length);
console.log("Danh sách sách bị trả muộn:");
for (let i = 0; i < lateBooks.length; i++) {
    console.log((i + 1) + " - " + lateBooks[i]);
}

let longNameCount = 0;

for (let i = 0; i < lateBooks.length; i++) {
    if (lateBooks[i].length > 20) {
        longNameCount++;
    }
}
console.log("Số lượng sách có tên dài hơn 20 ký tự:", longNameCount);
