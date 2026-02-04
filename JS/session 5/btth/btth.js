let choose;
let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];


do {
    choose = +prompt(`
        THƯ VIỆN KHOA HỌC
        1. Xem danh sách
        2. Nhập sách mới
        3. Mượn sách
        4. Sửa tên sách
        5. Sắp xếp sách theo tên
        0. Thoát
        `)

    switch (choose) {
        case 0:
            console.log("Good bye !!!!");

        case 1:
            // console.log("xem danh sách");
            for (let i = 0; i < books.length; i++) {
                console.log(`sách thứ  ${i + 1} có tên là ${books[i]}`);
            }
            break;
        case 2:
            console.log("Thêm sách");
            let newBook = prompt("Nhập tên sách mới");
            if (books.includes(newBook)) {
                console.log("sách đã tồn tại");

            } else {
                books.unshift(newBook);
                alert("thêm sách thành công !");
            }
            break;

        case 3:
            // console.log("Mượn sách");
            let bookName = prompt("Nhập tên sách muốn mượn");
            let check_index = books.indexOf(bookName);
            if (check == -1) {
                console.log("sách không tồn tại");

            } else {
                console.log(`đã mượn sách ${books[check_index]}`);
                books.splice(check_index, 1);
            }
            break;
        case 4:
            // console.log("Sửa sách");
            let updateBook = prompt("Mời nhập tên sách cần sửa");
            let index = books.indexOf(updateBook);
            if (index == -1) {
                console.log(` Sách ${books[index]} không tồn tại`);

            } else {
                let newBook = prompt("nhập tên sách mới");
                books[index] = newBook;
            }
            break;
        case 5:
            // console.log("Sắp xếp");

            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choose != 0);