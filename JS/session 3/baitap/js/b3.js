let ok = 0;
let no = 0;

while (true) {
    let ask = prompt("Có yêu cầu gia hạn mới không? (có/không)");

    if (ask === "không") {
        break;
    }

    if (ask !== "có") {
        console.log("Chỉ nhập có hoặc không");
        continue;
    }

    let name = prompt("Tên bạn đọc:");
    let book = prompt("Tên sách:");

    let day = Number(prompt("Số ngày đã mượn (>=1):"));
    while (day < 1) {
        day = Number(prompt("Nhập lại số ngày đã mượn (>=1):"));
    }

    let add = Number(prompt("Số ngày muốn gia hạn thêm (>=1):"));
    while (add < 1) {
        add = Number(prompt("Nhập lại số ngày gia hạn (>=1):"));
    }

    let total = day + add;

    if (total > 60) {
        console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày");
        no++;
    } else if (day > 45) {
        console.log("Không được gia hạn: Đã mượn quá lâu");
        no++;
    } else {
        console.log("Gia hạn thành công");
        ok++;
    }
}
console.log("Gia hạn thành công: " + ok);
console.log("Gia hạn không thành công: " + no);
