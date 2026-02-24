/* 

findIndex : trả về vị trí
1. ĐẦU VÀO : Hàm
2. ĐẦU RA :
+ nếu tìm thấy trả về vị trí index
+ nếu không tìm thấy trả về -1

*/

let students = [
    ["chi", "abcd11", "cntt5"],
    ["hoa", "abcd16", "cntt5"],
    ["lan", "abcd67", "cntt5"],
    ["linh", "abcd21", "cntt5"],
];
// cho người dùng nhập mã sinh viê nsau đó cập nhật nắm sinh

let maSV = "abcd11";
let result = students.findIndex((value) => {
    return value[1] == maSV;
})
console.log("result", result);
