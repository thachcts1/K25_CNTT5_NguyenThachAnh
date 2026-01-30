let bookName = prompt("Nhập tên sách");
let userBorrow = prompt("Nhập tên người mượn");
let bookStatus = prompt("Nhập trạng thái sách (có sẵn/đã mượn)");
let dateBorrowed = prompt("Số ngày mượn");
let card = prompt("Nhập thẻ thành viên (có/không)");
    if(bookStatus === "có sẵn" && card === "có"){
        console.log("Chúc mừng, bạn có thể mượn sách này");
    } else if(bookStatus === "đã mượn" && dateBorrowed < 30 && card === "có"){
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    } else if(bookStatus === "đã mượn" && dateBorrowed < 30 && card === "không"){
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    } else if(bookStatus === "không có sẵn"){
        console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
    } else {
        console.log("Thông tin không hợp lệ, vui lòng nhập lại");
    }