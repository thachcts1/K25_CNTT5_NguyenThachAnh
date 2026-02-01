let normal = 0;
let many = 0;
let total = 0;
let empty = 0;
let lost = 0;

while (true) {
    let ask = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (ask === "không") {
        break;
    }

    if (ask !== "có") {
        console.log("Chỉ nhập có hoặc không");
        continue;
    }

    let code = prompt("Mã sách:");
    while (code === "") {
        code = prompt("Mã sách không được để trống, nhập lại:");
    }

    let name = prompt("Tên sách:");

    let qty = Number(prompt("Số lượng thực tế (>=0):"));
    while (qty < 0) {
        qty = Number(prompt("Nhập lại số lượng (>=0):"));
    }

    let status = Number(prompt("Tình trạng sách: 1-Bình thường, 2-Mất"));
    while (status !== 1 && status !== 2) {
        status = Number(prompt("Nhập lại tình trạng: 1-Bình thường, 2-Mất"));
    }

    total++;

    if (status === 2) {
        console.log("Sách mất");
        lost++;
    } else if (qty === 0) {
        console.log("Sách hết hàng");
        empty++;
    } else if (qty >= 10) {
        console.log("Sách tồn kho nhiều");
        many++;
    } else {
        console.log("Sách tồn kho bình thường");
        normal++;
    }
}

console.log("Tổng số sách đã kiểm kê: " + total);
console.log("Số sách mất: " + lost);
console.log("Số sách hết hàng: " + empty);
