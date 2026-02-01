let turn = Number(prompt("Hôm nay có bao nhiêu lượt trả sách?"));
let late = 0;

for (let i = 1; i <= turn; i++) {
    console.log("Lượt trả thứ " + i);

    let name = prompt("Tên người trả:");
    let book = prompt("Tên sách:");
    let day = Number(prompt("Số ngày đã mượn:"));

    while (day < 1) {
        day = Number(prompt("Nhập lại số ngày (>= 1):"));
    }

    if (day <= 14) {
        console.log("Trả đúng hạn");
    } else if (day <= 21) {
        console.log("Trả muộn nhẹ");
        console.log("Phạt nhắc nhở");
        late++;
    } else {
        console.log("Quá hạn nghiêm trọng");
        console.log("Cần ghi biên bản phạt");
        late++;
    }
}

console.log("Tổng số lượt trả sách: " + turn);
console.log("Số lượt trả muộn: " + late);
