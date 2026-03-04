/*
    DOM: DOCUMENT OBJECT MODEL : Mô HÌNH TÀI LIỆU DẠNG ĐỐI TƯỢNG
    AI TẠO RA DOM ?  ==> khi trang web được tải lên thì trình duyệt sẽ tạo ra mô hình cây dom
    Dựa vào mô hình DOM này chúng ta có thể làm?
        + thay đổi nội dung trang web
        + thay đổi các phần tử, thuộc tính, ... của các thẻ HTML
        + tương tác các sự kiện trong phần tử HTML
    CÁC THÀNH PHẦN TRONG DOM
    1. ELEMENT
        Các cách để lấy element.
        1. lấy theo id : document.getElementById(); ==> trả về duy nhất 1 đối tượng
        2. lấy theo class: document.getElementsByClassName
        3. lấy theo tên thẻ: document.getElementsByTagName 
            ==> kết quả trả về HTML collection dạng mảng 
    2. ATRIBUTE ( THUỐC TÍNH)
    3. TEXT: Nội dung 


*/
function changeColor(){
    document.getElenmentById("heading").style.color = "red";
}
let h1_element = {
    style: {
        color: "red",
        backgroundColor: "green",
    },
};