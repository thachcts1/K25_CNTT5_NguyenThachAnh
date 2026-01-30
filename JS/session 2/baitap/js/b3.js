let bookName = prompt("Nhập tên sách");
    console.log("Tên sách: ",bookName);
let category = prompt("Nhập thể loại sách");
    console.log("Thể loại",category);

    if(category == "Khoa học" || category == "Lịch sử"){
        let statuss = prompt("Nhập tình trạng sách (có sẵn hay đã mượn)");
            if (statuss == "có sẵn") {
                console.log("Sách này có sẵn trong thư viện");
            }else{
                console.log("Sách đã được mượn!");
            }
    }else if (category == "Văn học" || category == "Truyện") {
        console.log("Sách này có thể đọc giải trí");
        
    }else{
        console.log("The next days..  !!!");
    }
    