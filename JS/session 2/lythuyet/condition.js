/*
    Câu điều kiện
    1. IF-ELSE
    2. IF_ELSE IF bậc thang
    3. Switch case



*/
/* let age = 19;
// chỉ cần giá trị biểu thức là TRUTHY
if (0) {
    console.log("đủ tuổi xem phim");
} else {
    console.log("Chưa đủ tuổi xem phim");
}
let day = +prompt("mời nhập ngày trong tuần");
if (day == 2) {
    console.log("ngày thứ 2");
} else if (day == 3) {
    console.log("ngày thứ 3");
} else if (day == 4) {
    console.log("này thứ 4");
}

let number = 16;
if (number > 5) {
    if (number % 4 == 0) {
        if (number % 8 == 0) {

        }
    } else {
        console.log("111");
    }
} */
let month = +prompt("Mời nhập tháng trong năm");
switch (month) {
    case 2:
        console.log("tháng 2 có 28 || 29 ngày");
        break;
    case 3:
        console.log("Tháng 3 có 30 ngày");
        break;

    default:
        console.log("Tháng kh tồn tại trong năm");
        break;
}