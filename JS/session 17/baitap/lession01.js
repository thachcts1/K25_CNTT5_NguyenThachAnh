const todos=[
    {id:1,task:"Mua bánh trưng",done:false},
    {id:2,task:"Dọn nhà đón tết",done:false},
    {id:3,task:"Gói bánh trưng",done:false},
    {id:4,task:"Trang trí nhà cửa",done:false},
];
const renderTodo=()=>{
    const Container=document.querySelector(".product-card");
    const Looplive=todos.map(item=>{
        return`
        <div class="todo-item">
        <span> ${item.task}</span>
        <span class="status">${item.done ? "Đã xong" : "Chưa làm"}</span>
        </div>`;
    }).join("");
    Container.innerHTML=Looplive;
};
const render=()=>{
    localStorage.setItem("myTodos",JSON.stringify(todos));
};
const main=()=>{
    renderTodo();
    render();
};
main()