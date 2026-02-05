/* 
    1. Array(Mảng): alf 2 kiểu dữ liệu có thể lưu nhiều giá trị kahcs.
    2. Cú pháp khai báo mảng:
        Tên TỪ KHÓA + TÊN MẢNG = [];
       Tên TỪ KHÓA: (let, const, var)
       TÊN MẢNG: đặt tên tiếng anh, quy tắc camelcase
    3. THAO TÁC VỚI MẢNG dùng các PHƯƠNG THỨC(method)
        CRUD với mảng:
        C(CREATE: TẠO_ THÊM PHẦN TỬ)
            + push(): thêm phần tử vào cuối mảng
            + unshift(): thêm vào đầu mảng
            + splice(index, deleteCount, item);
        R(READ: ĐỌC, HIỂN THỊ)
            + dùng vòng lặp for
        U(UPDATE: CẬP NHẬT PHẦN TỬ)
            cập nhập theo chỉ số index
                + splice(index, deleteCount, item);
        D(DELETE_ XÓA)
            + pop(): xóa phần tử ở cuối mảng
            + shift(): xóa phần tử ở đầu mảng
            + splice(): xóa ở vị trí bất kì
*/

// khai báo mảng dang sách sinh viên
let students = [];
students.push("Minh");
students.push("Quang");
students.splice(1,0,"Văn");
console.log("students",students);

for(let i =0; i < );
