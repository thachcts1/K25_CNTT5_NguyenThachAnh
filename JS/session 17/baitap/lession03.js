const initialTodos = [
    { id: 1, task: "Mua bánh chưng", done: false },
    { id: 2, task: "Dọn nhà đón tết", done: false },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
    { id: 5, task: "Mua phong bao lì xì", done: false },
    { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];
let todos = JSON.parse(localStorage.getItem("myTodos"));
if (!todos) {
    todos = initialTodos;
    localStorage.setItem("myTodos", JSON.stringify(todos));
}
const renderTodos = () => {
    const container = document.querySelector(".todo-list");
    container.innerHTML = todos.map(item => `
        <div class="todo-item ${item.done ? 'done' : ''}" onclick="toggleTodo(${item.id})">
            <div class="circle"></div>
            <span>${item.task}</span>
        </div>
    `).join("");
};
const addTodo = () => {
    const input = document.querySelector("#todo-input");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const newTodo = {
            id: Date.now(),
            task: taskText,
            done: false
        };
        todos.unshift(newTodo);
        localStorage.setItem("myTodos", JSON.stringify(todos));
        renderTodos();
        input.value = "";
    }
};
window.toggleTodo = (id) => {
    todos = todos.map(item => {
        if (item.id === id) {
            return { ...item, done: !item.done };
        }
        return item;
    });
    localStorage.setItem("myTodos", JSON.stringify(todos));
    renderTodos();
};
document.querySelector("#add-btn").addEventListener("click", addTodo);
document.querySelector("#todo-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

renderTodos();