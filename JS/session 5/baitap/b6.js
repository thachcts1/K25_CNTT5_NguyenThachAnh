let cardIdList = [];
let readerList = [];
let bookCodeList = [];
let lateDayList = [];

let totalReaders;
do {
    totalReaders = parseInt(
        prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?")
    );
} while (isNaN(totalReaders) || totalReaders <= 0);

for (let idx = 0; idx < totalReaders; idx++) {
    let cardCode, readerName, borrowedCodes, lateDays;

    do {
        cardCode = prompt(`Nhập mã thẻ bạn đọc thứ ${idx + 1}:`);
        if (cardCode === null || cardCode.trim() === "") continue;

        let duplicated = false;
        for (let j = 0; j < cardIdList.length; j++) {
            if (cardIdList[j] === cardCode) {
                duplicated = true;
                alert("Mã thẻ đã tồn tại, vui lòng nhập mã khác!");
                break;
            }
        }
        if (!duplicated) break;
    } while (true);

    do {
        readerName = prompt(`Nhập tên bạn đọc thứ ${idx + 1}:`);
    } while (readerName === null || readerName.trim() === "");

    do {
        borrowedCodes = prompt(
            `Nhập các mã sách đang mượn của bạn đọc thứ ${idx + 1} (cách nhau bởi dấu phẩy):`
        );
    } while (borrowedCodes === null || borrowedCodes.trim() === "");

    do {
        lateDays = parseInt(
            prompt(`Nhập số ngày quá hạn của bạn đọc thứ ${idx + 1}:`)
        );
    } while (isNaN(lateDays) || lateDays < 0);

    cardIdList.push(cardCode);
    readerList.push(readerName);
    bookCodeList.push(borrowedCodes);
    lateDayList.push(lateDays);
}

console.log(`Danh sách bạn đọc quá hạn (${cardIdList.length} người):`);
for (let i = 0; i < cardIdList.length; i++) {
    console.log(
        `${i + 1}. Mã thẻ: ${cardIdList[i]} | Tên: ${readerList[i]} | ` +
        `Sách đang mượn: ${bookCodeList[i]} | Quá hạn: ${lateDayList[i]} ngày`
    );
}

let over10Count = 0;
for (let i = 0; i < lateDayList.length; i++) {
    if (lateDayList[i] >= 10) {
        over10Count++;
    }
}
console.log(`\nTổng số bạn đọc quá hạn ≥ 10 ngày: ${over10Count} người`);

console.log('\nCác bạn đọc đang mượn cả sách JS* và PYT*:');
let hasBoth = false;

for (let i = 0; i < bookCodeList.length; i++) {
    let codeLower = bookCodeList[i].toLowerCase();
    if (codeLower.includes("js") && codeLower.includes("pyt")) {
        console.log(cardIdList[i]);
        hasBoth = true;
    }
}
if (!hasBoth) {
    console.log("Không có bạn đọc nào thỏa điều kiện.");
}

let maxLateIndex = 0;
for (let i = 1; i < lateDayList.length; i++) {
    if (lateDayList[i] > lateDayList[maxLateIndex]) {
        maxLateIndex = i;
    }
}
console.log(
    `\nBạn đọc có số ngày quá hạn cao nhất: ${readerList[maxLateIndex]} (${lateDayList[maxLateIndex]} ngày)`
);

let warningCount = 0;
for (let i = 0; i < lateDayList.length; i++) {
    if (lateDayList[i] >= 7) {
        warningCount++;
    }
}

console.log("");
if (warningCount === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (warningCount <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
