/* 

Các phương thức làm việc với mảng giúp xử lý các nghiệp vụ nhanh hơn.
1. indexOf() : kiểm tra xem phần tử có tồn tại trong mảng hay không
    + Nếu có trả về index
    + Nếu không có trả về -1
2. include(): kiểm tra phần tử có tồn tại trong mảng hay không
    + Trả về true || false
3. reverse(): đảo ngược các phần tử trong mảng
4. join() : nối các phần tử trong mảng thành string
5. split() : chuyển string sang mảng
6. slice( start, end) : cắt, sao chép
7. concat() : nối, gộp mảng
*/
let students = ["thu", "hoa", "hồng", "lan"];
students.reverse();
let result = students.indexOf("lan");
// console.log("result: ", result);

if(result!= -1){
    students.splice(result,1);
}else{
    console.log("Sinh viên không tồn tại!");
    
}

/* 
    Nhập tên sinh viên bất kì, kiểm tra sinh viên có tồn tại trong
    mảng students hay không?
*/
// let students = prompt ("Nhập tên sinh viên")


let scores = [7, 8, 4, 5, 6];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

let average = sum / scores.length;

console.log("Điểm trung bình:", average);
// tìm điểm lớn nhất
let max = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i];
    }
}

console.log("Điểm lớn nhất:", max);