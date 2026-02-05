// =======================
// I. CHỨC NĂNG ĐĂNG NHẬP
// =======================
let loginAttempts = 0;
let isAuthenticated = false;

while (loginAttempts < 3) {
    let username = prompt("Nhập tài khoản");
    let password = prompt("Nhập mật khẩu");

    if (username === "admin" && password === "12345") {
        alert("Đăng nhập thành công!");
        isAuthenticated = true;
        break;
    } else {
        loginAttempts++;

        if (username !== "admin" && password !== "12345") {
            alert(`Sai tài khoản và mật khẩu - còn ${3 - loginAttempts} lần`);
        } else if (username !== "admin") {
            alert(`Sai tài khoản - còn ${3 - loginAttempts} lần`);
        } else {
            alert(`Sai mật khẩu - còn ${3 - loginAttempts} lần`);
        }
    }
}

if (!isAuthenticated) {
    alert("Tài khoản đã bị khóa!");
} else {

    let choice;
    do {
        choice = parseInt(prompt(
            "====== HỆ THỐNG THƯ VIỆN ======\n" +
            "1. Phân loại mã số sách\n" +
            "2. Thiết kế sơ đồ kho sách\n" +
            "3. Dự toán phí bảo trì sách\n" +
            "4. Tìm mã số sách may mắn\n" +
            "5. Thoát\n"
        ));

        if (isNaN(choice)) {
            alert("Vui lòng chọn đúng chức năng!");
            continue;
        }

        switch (choice) {

            // ===== CASE 1 =====
            case 1:
                let total = 0;
                let even = 0;
                let odd = 0;

                alert("Nhập mã sách (Nhập 0 để kết thúc)");

                let running = true;
                while (running) {
                    let enter = Number(prompt("Nhập mã sách"));

                    if (isNaN(enter)) {
                        alert("Vui lòng nhập số");
                        continue;
                    }

                    if (enter === 0) {
                        running = false;
                        break;
                    }

                    total++;
                    if (enter % 2 === 0) {
                        even++;
                    } else {
                        odd++;
                    }
                }

                console.log("Tổng mã sách:", total);
                console.log("Số mã chẵn:", even);
                console.log("Số mã lẻ:", odd);
                break;

            // ===== CASE 2 =====
            case 2:
                let rows = Number(prompt("Nhập số hàng:"));
                let cols = Number(prompt("Nhập số cột:"));

                if (isNaN(rows) || isNaN(cols) || rows < 0 || cols < 0) {
                    alert("Dữ liệu không hợp lệ");
                    break;
                }
                console.log("Sơ Đồ Kho Sách");
                for (let i = 1; i <= rows; i++) {
                    let line = "";

                    for (let j = 1; j <= cols; j++) {
                        if (i === j) {
                            line += "* ";
                        } else {
                            line += "- ";
                        }
                    }
                    console.log(line);
                }
                break;
            // ======== CASE 3 ========
            case 3:
                let quantity = Number(prompt("Nhập số lượng sách:"));
                let cost = Number(prompt("Nhập phí bảo trì 1 cuốn:"));
                let years = Number(prompt("Nhập số năm dự toán:"));

                if (isNaN(quantity) || isNaN(cost) || isNaN(years)) {
                    alert("dữ liệu không hợp lệ");
                    break;
                }
                console.log("BẢNG DỰ TOÁN ĐANG BẢO TRÌ!!");

                for (let a = 1; a <= years; a++) {
                    let totalCost = quantity * cost;
                    console.log("Năm " + a + ": " + totalCost);
                    cost = cost * 1.1;
                }
                break;

            // ============= Case 4 =============
            case 4:
                let n = Number(prompt("Nhập số n"));
                if (isNaN(n) || n <= 0) {
                    alert("dữ liệu không hợp lệ");
                    break;
                }

                let count = 0;
                let list = "";

                for (let i = 1; i <= n; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        count++;
                        list += i + " ";
                    }
                }
                console.log("Danh sách mã may mắn:", list);
                console.log("tổng số mã:",count);
                break;
  
            // ===== CASE 5 =====
            case 5:
                alert("Thoát chương trình");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }

    } while (choice !== 5);
}