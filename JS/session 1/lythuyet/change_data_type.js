/*
    chuyển kiểu dữ liệu
    1. string --> number
        + number
        + use toán tử
        + paraseInt( chuyển sang số nguyên)
        + paraseFloat (chuyển sang số thực)
    2. number --> string
*/

// let a= Number( prompt("mời nhập giá trị số a")):
// let b= prompt("mời nhập giá trị số b");
// let c= parseInt(prompt("nhập c"));
// let sum = a+b+c; // "5"+"6"
// console.log("giá trị sum", sum);
let age= 18;
let result= String(age);
console.log(typeof(result));