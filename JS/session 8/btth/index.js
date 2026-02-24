const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];

let choose;
do {
    choose = +prompt(`Nhập lựa chọn của bạn (0-5):
        1: xem danh sách
        2: Tìm kiếm
        3. Lọc vị trí
        4: Tổng bàn thắng
        5. Kiểm tra hiệu suất
        0. Thoát chương trình
        `);

    switch (choose) {
        case 0:
            console.log("Thoát chương trình");
            alert("Thoát chương trình");
            break;
        case 1:
            console.log("Danh sách cầu thủ:");
            show()
            alert("Danh sách cầu thủ đã hiển thị");
            break;
        case 2:
            console.log("Tìm kiếm cầu thủ");
            let result = searchForplayer();
            if (result) {
                console.log("Cầu thủ tìm thấy:", result);
            } else {
                console.log("Không tìm thấy cầu thủ");
            }
            break;
         case 3:
            filterByPosition();
            alert("Đã lọc theo vị trí");
            break;

        case 4:
            totalGoals();
            alert("Tổng số bàn thắng đã được hiển thị");
            break;

        case 5:
            checkPerformance();
            alert("Hiệu suất đội bóng đã được kiểm tra");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            alert("Lựa chọn không hợp lệ");
            break;
    }


} while (choose != 0)
function show() {
    squad.forEach((value, index) => {
        console.log(`Tên cầu thủ: ${value[0]}, Vị trí: ${value[1]}, Bàn thắng: ${value[2]}`);
    });
}
function searchForPlayer(){
    let name= prompt("nhập tên cầu thủ");
    let result= squad.find((value)=>{
        return value[0].toLowerCase() == name .toLowerCase();
    })
    return result
}
function filterByPosition() {
    let pos = prompt("Nhập vị trí muốn lọc (FW/MF/DF/GK):");

    let result = squad.filter(player =>
        player[2].toUpperCase() === pos.toUpperCase()
    );

    console.log("=> KẾT QUẢ LỌC:");
    if (result.length > 0) {
        result.forEach(player => {
            console.log(`- ${player[0]} (${player[1]} bàn)`);
        });
    } else {
        console.log("Không có cầu thủ nào ở vị trí này");
    }
}
function totalGoals() {
    let total = squad.reduce((sum, player) => {
        return sum + player[1];
    }, 0);

    console.log(`=> Tổng số bàn thắng toàn đội: ${total} bàn`);
} 
function checkPerformance() {

    let hasZero = squad.some(player => player[1] === 0);
    let allScored = squad.every(player => player[1] > 0);

    if (hasZero) {
        console.log("Có cầu thủ chưa ghi bàn");
    }

    if (allScored) {
        console.log("Tất cả cầu thủ đều đã ghi bàn");
    }
}