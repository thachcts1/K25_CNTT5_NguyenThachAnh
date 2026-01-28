/*
INPUT : dữ liệu truyền vào
    + prompt: dữ liệu người dùng nhâp vào
        + Giá trị khi người dùng nhập có kiểu dữ liệu string
        + nếu không nhập nhấn cancel giá trị sẽ là null

OUTPUT: dữ liệu đầu ra
    1. alert(): hộp thoại thông báo cho người dùng
    2. console.log () : hiển thị kết quả để kiểm tra, debug...
    3. document.write () : hiển thị ra trình duyệt
    4. confirm xác nhận : confirm
*/
let fullname= prompt("Mời nhập tên");
console.log("fullname", fullname);
document.write("cố gắng học lập trình js");

let result=confirm("bạn đủ 18 tuổi chưa");
console.log(result);