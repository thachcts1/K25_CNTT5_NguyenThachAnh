/* 
    Biến là gì ? dùng để lưu trữ dlieu


    3 cách khai báo biến
     js 1995
    1. var
        + có thể khai báo lại
        + có thể gán lại giá trị
        + phạm vi truy cập funtion
        + có hoisting truy cập đc
        Đưa Phần Khai Báo Lên Đầu
    
    2. let sinh ra ở pb ES6(2015)
        + ko thể khai báo lại
        + có thể gắn lại giá trị
        + phạm vi block scope{}
        + có hoisting hưng khong truy cập được
    
    3. const sinh ra ở pb ES6(2015)
        + ko thể khai báo lại
        + ko thể gắn lại giá trị
        + phạm vi block scope{}
        + có hoisting hưng khong truy cập được
    
        Quy tắc đặt tên biến: 
        + ko bắt đầu bằng số, kí tự đặc biệt trừ (_,$)
        + Tránh trùng từ khóa đặc biệt (let, const, var, class, funtion,..)
        + theo quy tắc camelcase 
        + phân biệt hoa thường
    
*/


var fullname = "lê dương bảo lâm";
var fullname = "lê min gia mẫn";

fullname =  "lê không ngon";
{
    let a = 8;
    let a = 5;
    {
        {
            a=100;
        }
    }
}
var b =5;
console.log("giá trị b",b);
