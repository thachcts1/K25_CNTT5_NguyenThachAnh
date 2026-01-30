let bookName = prompt("tên sách");
    console.log("tên sách: ",bookName);
    
let author = prompt("Tác giả");
    console.log("Tác giả: ",author);
    
let publish = prompt("năm xuất bản");
    console.log("Năm xuất bản:", publish);
    
let currentYear = prompt("Năm hiện tại");
    console.log("Năm hiện tại: ",currentYear);

if (publish == currentYear) {
    console.log("Đây là sách mới");
    
}else if (currentYear - publish <= 5) {
    console.log("Sách khá mới");
    
}else{
    console.log("Sách đã cũ");
    
}