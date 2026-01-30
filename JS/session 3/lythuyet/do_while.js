/* 
1. dùng khi nào : 
+ muốn task vị chạy ít nhất 1 lần
+ thường dùng trong bài toán chọn menu
2. cú pháp
do{
}while(điều kiện)
3. lluoongf hoạt động
_ Chạy lần đầu tiên sau đó kiểm tra điều kiện
+ Nếu Điều Kiện đúng ==> Chạy tiếp Do
+ Nếu Điều Kiện đúng ==> dừng chương trình
*/

let choose;
do {
    choose = +prompt("mời nhập lựa chọn");
    switch (choose) {
        case 1:
            console.log("Chọn chức năng 1");
            break;
        case 2:
            console.log("chọn chức năng 2");
            break;
        case 3:
            console.log("Say Bye !!!!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choose != 3);