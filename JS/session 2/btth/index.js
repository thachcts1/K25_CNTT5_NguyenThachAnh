let userName = prompt("Nhập tên nguời dùng");
let role = prompt("Mời nhập vai trò admin || student || guest");
let accountBlance = prompt("mời nhập số dư tài khoản");
let cardStatus = ("Mời nhập trạng thái thẻ");
let date = prompt("Số ngày quá hạn trả sách");

//2. ktra quyền truy cập dựa vào biến và Role

if (role == "admin") {
    console.log(`chào ${role} bạn có toàn quyền hệ thống!`);
}else if(role == "student"){
    console.log(`chào ${role} bạn có thể mượn sách!`); 
}else if(role == "guest"){
    console.log(`chào ${role} bạn chỉ có thể dọc sách tại chỗ !`); 
}else{
    console.log("Lỗi vai trò");   
}
// 3. ktra ddkien mượn sách
let check = userName != null && (role == "admin" || role == "student") && accountBlance > 0
&& cardStatus == "true"

if(check){
    console.log("đủ điều kiện mượn sách");
    
}else{
    console.log("không đủ điều kiện");
    
}

//4. tính phí trả sách dựa vào ngày quá hạn

if(date==0){
    console.log("cảm ơn bạn đã đúng hạn");
}else if(date >= 1 && date <= 5){
    console.log("tổng tiền phạt", date*5000);
}else if(date <= 10){
    console.log("tổng tiền phạt", date*10000);
}else if(date > 10){
    console.log("Phạt 200.000, khóa tài khoản");
    cardStatus = false;
}else{
    console.log(`${date} không hợp lệ`);
}