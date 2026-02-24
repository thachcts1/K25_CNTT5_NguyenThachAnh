/* 
    FIND: tìm kiếm phần tử
    1. ĐẦU VÀO : 1 hàm
    2. ĐẦU RA :
     + nếu tìm thấy trả về phần tử
     + nếu không tìm thấy trả về undefined

*/
let students = [
    ["chi", "abcd11", "cntt5"],
    ["hoa", "abcd16", "cntt5"],
    ["lan", "abcd67", "cntt5"],
    ["linh", "abcd21", "cntt5"],
];
let maSV = "abcd11";
let result = students.find((value) => {
    return value[1] == maSV;
})
console.log("result", result);
