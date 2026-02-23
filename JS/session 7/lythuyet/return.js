/*
return : giá trị trả về của hàm và kết thúc hàm
    + chỉ dùng với hàm
    +không đc viết câu lệnh sau return

*/
 function sum (){
    let a = 5;
    let b = 6;
    return;
    console.log("tổng a cộng b= ",a+b);
    
 }
 sum ();

 function checkEmail(){
    let email=prompt("mời b nhập email");
    if(email.includes("@")){

    }
    return false;
 }
 if(checkEmail()){
    console.log("email hợp lệ ");
    
 }else{
    console.log("email k hợp lệ ");
 }