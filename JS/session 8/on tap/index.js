/* 

1. từ khóa kai báo biến: var, let, const
2. toán tử 
    + số học: +, -, *, /, %
    + gán: =, +=, -=, *=, /=
    + so sánh: ==, ===, !=, !==, >, <, >=, <=
    + logic: &&, ||, !
    + toán tử 3 ngôi: điều kiện ? giá trị 1 : giá trị 2
    + toán tử tăng giảm: ++, --
3. câu điều kiện : condititon
    if_else
    if_else : lồng
    if_else : bậc thang
    switch_case: 
4. vòng lặp: loop
    + for, for lồng, for in, for of
    + while
    + do_while
5. mảng: array
    let, var, const Tên mảng = []
    CRUD : với mảng
    5.1 C: create
        + push: thêm phần tử vào cuối mảng
        + unshift: thêm phần tử vào đầu mảng
        + splice (index, count, update): thêm phần tử vào vị trí bất kì trong mảng
    5.2 R: read
        + for, for lồng, for in, for
    5.3 U: update
        + splice (index, count, update)
        + cập nhật theo vị trí
        + array[index] = update
    5.4 D: delete
        + pop: xóa phần tử cuối mảng
        + shift: xóa phần tử đầu mảng
        + splice (index, count): xóa phần tử vào vị trí bất kì trong mảng
6. các methods làm việc với mảng
    + reverse: đảo ngược mảng
    + indexOf: tìm kiếm phần tử trong mảng trả về vị trí index
    + includes: tìm kiếm phần tử trong mảng trả về true/false
    + join: nối các phần tử trong mảng thành chuỗi
    + split: tách chuỗi thành mảng
    + sort: sắp xếp mảng
    + concat: nối 2 mảng thành 1 mảng mới
    + slice: cắt 1 phần mảng thành 1 mảng mới
    + trim: xóa khoảng trắng đầu và cuối chuỗi
    + toUpperCase: chuyển chuỗi thành chữ hoa
    + toLowerCase: chuyển chuỗi thành chữ thường
    + replace: thay thế chuỗi bằng chuỗi khác
7. function: hàm
    + function declaration: khai báo hàm
    + function expression: biểu thức hàm
    + arrow function: hàm mũi tên
8. các phương thức làm việc với mảng
    map, forEach, filter, find, reduce, some, every, findIndex

*/


/* 
    KHI LÀM VIỆC VỚI CÁC METHOD
    1. ĐẦU VÀO NHẬN LÀ GÌ ?
    2. KẾT QUẢ TRẢ VỀ LÀ GÌ ?
*/

let numbers = [5, 7, 23, 11, 5];
//let result = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
       // result.push(numbers[i]);
    }

}
//console.log("result", result);
let students = [
    ["Thuy", 5],
    ["Chi", 6],
    ["Văn", 3]
];

let score = students.filter((value) => {
    return value[1]>=5;
})
console.log("score", score);

for (let i = 0; i < students.length; i++) {
    if(students[i][1] >=5){
       // console.log(`sinh viên : ${students[i][0]}`);
    }
}
let arr=[5,7,88,4,55];

let result= arr.filter((value, index, arr) =>{
   return value > 50;

})
console.log(result);
if(result.length!= 0){}


// dùng reduce để tính tổng các phần tử trong mảng
let students = [
    ["Thuy", 5],
    ["Chi", 6],
    ["Văn", 3]
];
let totalScore = students.reduce((acc, value) => {
    return acc + value[1];
}, 0)
console.log("totalScore", totalScore); 
