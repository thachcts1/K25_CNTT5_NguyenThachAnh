let total = 0;
let ok = 0;
let no = 0;
let wait = 0;

while (true) {
    let ask = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

    if (ask === "không") {
        break;
    }

    if (ask !== "có") {
        console.log("Chỉ nhập có hoặc không");
        continue;
    }

    let name = prompt("Tên bạn đọc:");
    let code = prompt("Mã sách muốn đặt trước:");
    let book = prompt("Tên sách:");

    let day = Number(prompt("Số ngày dự kiến chờ (>=1):"));
    while (day < 1) {
        day = Number(prompt("Nhập lại số ngày chờ (>=1):"));
    }

    let pr = Number(prompt("Ưu tiên: 1-Sinh viên, 2-Giảng viên/NCS, 3-Đặc cách"));
    while (pr < 1 || pr > 3) {
        pr = Number(prompt("Nhập lại ưu tiên: 1-Sinh viên, 2-Giảng viên/NCS, 3-Đặc cách"));
    }

    total++;

    if (day > 45) {
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        no++;
    } else if (pr === 3) {
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        ok++;
    } else if (pr === 2 && day <= 30) {
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        ok++;
    } else if (pr === 1 && day <= 21) {
        console.log("Đặt trước thành công");
        ok++;
    } else {
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
        wait++;
    }
}

console.log("Số yêu cầu chờ xét duyệt: " + wait);
console.log("Số yêu cầu đặt trước thành công: " + ok);
console.log("Tổng số yêu cầu đã xử lý: " + total);
console.log("Số yêu cầu bị từ chối: " + no);
