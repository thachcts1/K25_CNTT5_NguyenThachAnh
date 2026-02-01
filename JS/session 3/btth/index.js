let password = "";
password = prompt("Mời nhập mật khẩu");
let count = 0;
let flag = true;
while (password != "admin123") {
    if (count == 2) {
        flag = false;
        break;
    }
    count++;
    password = prompt(`Mật khẩu chưa đúng nhập lại còn lại : ${3 - count} lần`);
}

if (flag) {
    alert("Đăng nhập thành công");

    let choose;

    while (choose != 3) {
        choose = +prompt(`
        ===== MENU =====
        1. Nhập lô sách mới
        2. Vẽ sơ đồ kệ sách
        3. Thoát
        Mời nhập lựa chọn`);

        switch (choose) {
            case 1:
                let numberOfBooks = +prompt("Bạn muốn nhập bao nhiêu cuốn sách?");
                let totalPrice = 0;

                for (let i = 1; i <= numberOfBooks; i++) {
                    let bookPrice = +prompt(`Nhập giá tiền cuốn sách thứ ${i}`);

                    if (bookPrice <= 0) {
                        alert("Giá tiền không hợp lệ");
                        continue;
                    }

                    totalPrice += bookPrice;
                }

                console.log(`Tổng giá trị nhập kho đợt này là: ${totalPrice}`);
                break;

            case 2:
                for (let area = 1; area <= 3; area++) {
                    for (let shelf = 1; shelf <= 5; shelf++) {

                        if (area === 2 && shelf === 3) {
                            console.log("Khu vực 2 - Kệ 3 (Đang sửa chữa)");
                            continue;
                        }

                        console.log(`Khu vực ${area} - Kệ ${shelf}`);
                    }
                }
                break;

            case 3:
                console.log("Hẹn gặp lại!");
                break;

            default:
                console.log("Lựa chọn không hợp lệ");
                break;
        }
    }
} else {
    console.log("Bạn chưa đăng nhập đúng");
}