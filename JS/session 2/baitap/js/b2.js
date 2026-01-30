let numberOfBook = prompt("Nhập số lượng sách");
    console.log("Số lượng sách trong thư viện là: ",numberOfBook);

    if(numberOfBook < 10){
        console.log("Thư viện có ít sách");
        
    }else if (numberOfBook >= 10 && numberOfBook <= 20) {
        console.log("Thư viện có lượng sách vừa đủ");

    }else{
        console.log("Thư viện có nhiều sách");
        
    }