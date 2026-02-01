let total = 0;

let hard = 0
let mid = 0;
let light = 0;

let suggest = 0;
let good = 0;

while (true) {
    let ask = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

    if (ask === "không") {
        break;
    }

    if (ask !== "có") {
        console.log("Chỉ nhập có hoặc không");
        continue;
    }

    let name = prompt("Tên bạn đọc:");
    while (name === "") {
        name = prompt("Tên bạn đọc không được để trống, nhập lại:");
    }

    let card = prompt("Mã thẻ bạn đọc (có thể để trống):");

    let type = Number(prompt("Loại phản hồi: 1-Khiếu nại, 2-Đề xuất, 3-Phản hồi tích cực"));
    while (type < 1 || type > 3) {
        type = Number(prompt("Nhập lại loại phản hồi: 1-Khiếu nại, 2-Đề xuất, 3-Phản hồi tích cực"));
    }

    let level = 0;
    if (type === 1) {
        level = Number(prompt("Mức độ: 1-Nhẹ, 2-Trung bình, 3-Nghiêm trọng"));
        while (level < 1 || level > 3) {
            level = Number(prompt("Nhập lại mức độ: 1-Nhẹ, 2-Trung bình, 3-Nghiêm trọng"));
        }
    }

    let note = prompt("Nội dung ngắn gọn:");

    total++;

    if (type === 1 && level === 3) {
        console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
        hard++;
    } else if (type === 1 && level === 2) {
        console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
        mid++;
    } else if (type === 1 && level === 1) {
        console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
        light++;
    } else if (type === 2) {
        console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
        suggest++;
    } else {
        console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
        good++;
    }
}

console.log("Tổng số phản hồi/khiếu nại đã xử lý: " + total);
console.log("Số phản hồi tích cực: " + good);
console.log("Số khiếu nại trung bình: " + mid);
console.log("Số khiếu nại nghiêm trọng: " + hard);
console.log("Số đề xuất cải thiện: " + suggest);
console.log("Số khiếu nại nhẹ: " + light);
