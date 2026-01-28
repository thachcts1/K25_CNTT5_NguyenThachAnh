/* 

kiểu dữ liệu
Trong js chia thành 2 nhóm kiểu dữ liệu
Nhóm I : nguyên thủy, đơn giản, primitive type, tham trị
    1. number
    2. string
    3. boolean
    4. null
    5. underfined
    6. NaN (not a number)
    7. symbol
Nhóm II : Phức tạp, reference type, tham chiếu
    1. function
    2. array
    3. object

*/
// number
let quantity =5;
let price = 5000;

console.log("kiểu dữ liệu number", typeof(price));
//kiểu dl string
let email ="hoa@gmail.com";
console.log("kiểu dữ liệu email", typeof(email));

// kiểu dữ liệu boolean, true | false
let islogin = true

//undefined : 1 biến khai báo không gán giá trị
let age;

//null :
//Ex : khi user nhập promt mà nhấn cancel gtri sẽ là null

//Nan :
let result = "tokuda"/3;
console.log("result",result);
console.log("kiểu dữ liệu result", Number.isNaN(result));

//cách kiểm tra kiểu dữ liệu typeof
//cách kiểm tra kiểu dl NaN (Number.isNaN())
