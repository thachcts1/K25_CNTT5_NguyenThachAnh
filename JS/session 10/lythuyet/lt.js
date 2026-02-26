/* CRUD OBJECt*/

let person = {};
console.log(typeof person); // trả về object
// thuộc tính: tên thuộc tính : key; giá trị : value; để ngăn cách thuộc tính dùng dấu phẩy
let person_v2 = {
    fullName: "An", age: 19, "full name": "Hoàng An"
};

let fullName = "full name";


// Read: Đọc dữ liệu
// Dot notation, bracket notation

// dot
console.log(`Tên cảu bạn là : ${person_v2.fullName}`);
// bracket
console.log(`Tên của bạn theo cách 2 là : ${person_v2["full name"]}`);
console.log("Trước update", person_v2);

// Update

person_v2.fullName = "Thuy";
console.log("Sau update", person_v2);

// Create thuộc tính
person_v2.email = "Thuy@gamil.com";
console.log(person_v2);
// Cách 2

let person_v3 = { ...person_v2, sex: "male", };
console.log(person_v3);


// delete
delete person_v3.sex;
console.log(person_v3);
// Duyệt object
console.log(Object.keys(person_v3));
console.log(Object.values(person_v3));
console.log(Object.entries(person_v3));

for (const [key, value] of Object.entries(person_v3)) {
    console.log(`Key là : ${key}, value là : ${value}`);

}


//CRUD mảng object
let player = [
    { id: 0, name: "Thuy", age: 18, goal: -1 },
    { id: 1, name: "An", age: 18, goal: 0 },
    { id: 2, name: "Quyết", age: 18, goal: 2 },
];
// lấy cầu thủ có chỉ số lớn hơn 0
 let listTopGoal = players.filter((player)=> {
    return player.goal > 0;
 });

 console.log(listTopGoal);
 