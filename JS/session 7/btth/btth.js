let choose;
let playerList = [];
let goalList = [];
do {
    choose = Number(prompt(`
 --- QUẢN LÝ ĐỘI BÓNG ---

1. Nhập cầu thủ mới

2. Xem danh sách đội hình

3. Xem thành tích toàn đội

4. Tìm Vua phá lưới

0. Thoát`));

    switch (choose) {
        case 1:
            // console.log("Nhập cầu thủ mới");
            let name = prompt("Nhập tên cầu thủ");
            let goal = +prompt("Nhập số bàn thằng");
            addPlayer(name, goal);


            break;
        case 2:
            // console.log("Xem danh sách đội hình");

            showSquad();
            break;
        case 3:
            //console.log("Xem thành tích toàn đội");
            console.log(`Tổng số bàn thắng là: `, getTotalGoals());



            break;
        case 4:
           // console.log("Tìm vua phá lưới");
           for (let i = 0; i < goalList.length; i++) {
            if(goalList[i] == findMostGoals(goalList)){
                console.log(`Cầu thủ ${playerList[i]} ghi nhiều bàn nhất: ${goalList[i]} bàn! `);

            }

           }

            break;
        case 0:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }

} while (choose != 0);
function addPlayer(name, goal) { // nhập tên cầu thủ
    playerList.push(name);
    goalList.push(goal);
    console.log(`Thêm cầu thủ ${name} thành công`);

}

function showSquad() {
    for (let i = 0; i < playerList.length; i++) {
        console.log(`${i + 1}. ${playerList[i]} - ${goalList[i]} bàn`);

    }
}

function getTotalGoals() {
    let sum = 0;
    for (let i = 0; i < goalList.length; i++) {
        sum += goalList[i];

    }
    return sum;
}
function findMostGoals(goalsArray){
    let max = goalsArray[0];
    for (let i = 0; i < goalsArray.length; i++) {
     if(goalsArray[i] > max){
        max = goalsArray[i];
     }

    }
    return max;
}