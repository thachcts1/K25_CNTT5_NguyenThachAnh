let names = ["iPhone 15", "Samsung S23", "Oppo Reno", "Xiaomi 13", "Nokia C20"];
let prices = [1200, 900, 450, 600, 80];
let stocks = [10, 5, 0, 8, 15];

let running = true;

while (running) {

    let choice = prompt(`--- QUẢN LÝ KHO ---
1. Lọc sản phẩm >500
2. Kiểm tra dữ liệu
3. Tính tổng tài sản
4. Giảm giá 10%
5. Tìm sản phẩm
6. Báo cáo tồn kho
7. Thoát

Chọn:`);

    if (choice == null) break;

    switch (Number(choice)) {

        case 1:
            let highProducts = names.filter(function (_, i) {
                return prices[i] > 500;
            });

            alert("SP >500:\n" + (highProducts.join(", ") || "Không có"));
            break;

        case 2:
            let outOfStock = stocks.some(function (s) {
                return s === 0;
            });

            let allAbove100 = prices.every(function (p) {
                return p > 100;
            });

            alert("Có SP hết hàng: " + (outOfStock ? "Có" : "Không") +
                  "\nTất cả giá >100: " + (allAbove100 ? "Đúng" : "Sai"));
            break;

        case 3:
            let total = prices.reduce(function (sum, price, i) {
                return sum + price * stocks[i];
            }, 0);

            alert("Tổng tài sản: " + total + " USD");
            break;

        case 4:
            prices.forEach(function (price, i) {
                prices[i] = price * 0.9;
            });

            alert("Đã giảm giá 10%");
            break;

        case 5:
            let key = prompt("Nhập tên cần tìm:");
            if (!key) break;

            key = key.toLowerCase();
            let result = [];

            names.forEach(function (name, i) {
                if (name.toLowerCase().includes(key)) {
                    result.push(
                        name + " - Giá: " + prices[i] + " - Kho: " + stocks[i]
                    );
                }
            });

            alert(result.length ? result.join("\n") : "Không tìm thấy");
            break;

        case 6:
            let report = stocks.map(function (qty, i) {
                let status = qty > 0 ? "Còn hàng" : "Hết hàng";
                return names[i] + ": " + status + " (" + qty + ")";
            });

            alert(report.join("\n"));
            break;

        case 7:
            running = false;
            alert("Thoát chương trình");
            break;

        default:
            alert("Nhập sai!");
    }
}