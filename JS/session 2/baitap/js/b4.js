let bookName = prompt("tên sách");
console.log("Tên sách", bookName);
let borrowerName = prompt("tên người mượn");
console.log("Tên người mượn", borrowerName);
let level = prompt("Mức độ yêu thích (Từ 1 -> 5)");
console.log("Mức độ yêu thích", level);
if (level == 5 || level == 4) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (level == 3) {
    console.log("Sách này khá ổn, có thể mượn");

} else if (level == 2 || level == 1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
} else {
    console.log("Hì hì =))");
}