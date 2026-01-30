let bookName = prompt("Tên sách");
let bookStatus = prompt("trạng thái sách (có sẵn hay đã mượn)");
let yearPublish = prompt("Năm xuất bản");

let year = prompt("Nhập năm hiện tại");
let caculate = year - yearPublish;

if(bookStatus == "có sẵn" && caculate <= 5){
    console.log("Sách này mới và có sẵn để mượn");
}else if (bookStatus == "đã mượn" && caculate <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
    
}else if (bookStatus == "đã mượn" && caculate > 10 ) {
    console.log("Sách này đã mượn và khá cũ");
    
}else if (bookStatus == "có sẵn" && caculate > 5 ) {
    console.log("Sách này có sẵn nhưng đã lâu năm");
    
}else{
    console.log("Thông tin sách không hợp lệ");
    
}