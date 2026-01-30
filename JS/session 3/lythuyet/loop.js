/* 
    đoạn code logic được lặp đi lặp lại và tuân theo quy luật chung!

    trong js có 3 vòng lặp chính:

    1. for
        _ Biết trước số lần lặp
        _ for(Giá trị khởi tạo; điều kiện; bước nhẩy){
        }
        _ Luồng hoạt động

        FOR Lồng 

    2. while
    3. do_while

    I- Khi nào dùng
    II- cú pháp
    III- Luồng hoạt động

*/
// let i;
// for (let i =1; i<= 10; i+=3){
//     //thân for
//     console.log("i",i); 
    
// }
// console.log(i);


// for (let i = 1; i < 3; i++) {
//     for(let j =1; j < 4; j++){
//         console.log("j",j);
        
//     }
// }


for (let i = 1; i <= 10; i++) {
    document.write(`<h3>Bảng cửu chương ${i}</h3>`);
    for (let j = 1; j <= 10; j++) {
        document.write(`${i} x ${j} = ${i * j}<br>`);
    }
    document.write("<hr>");
}
