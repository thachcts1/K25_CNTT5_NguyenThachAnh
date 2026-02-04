let idList = [];
let nameList = [];
let statusList = [];
let totalBooks;

do {
    totalBooks = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));
} while (isNaN(totalBooks) || totalBooks <= 0);

for (let idx = 0; idx < totalBooks; idx++) {
    let bookId, bookName, statusOption, bookState;

    do {
        bookId = prompt(`Nhập mã sách thứ ${idx + 1}:`);
    } while (bookId === null || bookId.trim() === "");

    do {
        bookName = prompt(`Nhập tên sách thứ ${idx + 1}:`);
    } while (bookName === null || bookName.trim() === "");

    do {
        statusOption = parseInt(
            prompt(
                "Chọn tình trạng ban đầu:\n" +
                "1. Hỏng nhẹ\n" +
                "2. Hỏng nặng\n" +
                "3. Cần sửa gấp"
            )
        );
    } while (![1, 2, 3].includes(statusOption));

    if (statusOption === 1) bookState = "Hỏng nhẹ";
    else if (statusOption === 2) bookState = "Hỏng nặng";
    else bookState = "Cần sửa gấp";

    idList.push(bookId);
    nameList.push(bookName);
    statusList.push(bookState);
}

console.log("=== DANH SÁCH BAN ĐẦU ===");
for (let i = 0; i < idList.length; i++) {
    console.log(
        `${i + 1}. Mã: ${idList[i]} | Tên: ${nameList[i]} | Tình trạng: ${statusList[i]}`
    );
}

while (true) {
    let menuChoice = parseInt(
        prompt(
            "Bạn muốn làm gì?\n" +
            "1. Sửa tình trạng một cuốn sách\n" +
            "2. Loại bỏ (xóa) một cuốn sách\n" +
            "0. Kết thúc và in báo cáo cuối"
        )
    );

    if (menuChoice === 0) break;

    if (menuChoice === 1) {
        let editId = prompt("Nhập mã sách cần sửa:");
        let pos = -1;

        for (let i = 0; i < idList.length; i++) {
            if (idList[i] === editId) {
                pos = i;
                break;
            }
        }

        if (pos === -1) {
            alert("Không tìm thấy mã sách!");
            continue;
        }

        let newStatusChoice;
        do {
            newStatusChoice = parseInt(
                prompt(
                    "Chọn tình trạng mới:\n" +
                    "1. Hỏng nhẹ\n" +
                    "2. Hỏng nặng\n" +
                    "3. Cần sửa gấp\n" +
                    "4. Đã sửa xong\n" +
                    "5. Loại bỏ"
                )
            );
        } while (![1, 2, 3, 4, 5].includes(newStatusChoice));

        if (newStatusChoice === 1) statusList[pos] = "Hỏng nhẹ";
        else if (newStatusChoice === 2) statusList[pos] = "Hỏng nặng";
        else if (newStatusChoice === 3) statusList[pos] = "Cần sửa gấp";
        else if (newStatusChoice === 4) statusList[pos] = "Đã sửa xong";
        else statusList[pos] = "Loại bỏ";
    }
    else if (menuChoice === 2) {
        let deleteId = prompt("Nhập mã sách cần xóa:");
        let pos = -1;

        for (let i = 0; i < idList.length; i++) {
            if (idList[i] === deleteId) {
                pos = i;
                break;
            }
        }

        if (pos !== -1) {
            idList.splice(pos, 1);
            nameList.splice(pos, 1);
            statusList.splice(pos, 1);
        } else {
            alert("Không tìm thấy mã sách!");
        }
    }

    console.log("=== DANH SÁCH HIỆN TẠI ===");
    for (let i = 0; i < idList.length; i++) {
        console.log(
            `${i + 1}. Mã: ${idList[i]} | Tên: ${nameList[i]} | Tình trạng: ${statusList[i]}`
        );
    }
}

let fixedTotal = 0;
let removedTotal = 0;
for (let i = 0; i < statusList.length; i++) {
    if (statusList[i] === "Đã sửa xong") fixedTotal++;
    if (statusList[i] === "Loại bỏ") removedTotal++;
}

console.log("=== BÁO CÁO CUỐI CA ===");
console.log(`Tổng số sách còn lại: ${idList.length}`);
console.log(`Số sách đã sửa xong: ${fixedTotal}`);
console.log(`Số sách loại bỏ: ${removedTotal}`);

if (idList.length > 0) {
    console.log("Danh sách sách còn lại:");
    for (let i = 0; i < idList.length; i++) {
        console.log(
            `${i + 1}. Mã: ${idList[i]} | Tên: ${nameList[i]} | Tình trạng: ${statusList[i]}`
        );
    }
} else {
    console.log("Không còn sách nào trong danh sách.");
}
