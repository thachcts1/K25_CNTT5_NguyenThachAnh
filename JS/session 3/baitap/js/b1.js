let turn = Number(prompt("Hôm nay có bao nhiêu lượt mượn sách"));

for (let i = 1; i <= turn; i++) {
    console.log("Lượt mượn thứ " + i);

    let userName = prompt("Tên người mượn");
    let bookName = prompt("Tên sách");
    let day = Number(prompt("Số ngày mượn"));

    if (day > 14) {
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else {
        console.log("Mượn thành công");
    }
}

console.log("Tổng số lượt mượn trong ngày là: " + turn);
