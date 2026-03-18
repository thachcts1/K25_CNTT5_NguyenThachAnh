const initialTodos = [
    { id: 1, task: "Mua bánh chưng", done: false },
    { id: 2, task: "Dọn nhà đón tết", done: false },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
    { id: 5, task: "Mua phong bao lì xì", done: false },
    { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];
let todos = JSON.parse(localStorage.getItem("myTodos"));
let editingId = null;
if (!todos) {
    todos = initialTodos;
    localStorage.setItem("myTodos", JSON.stringify(todos));
}
const renderTodos = () => {
    const container = document.querySelector(".todo-list");
    container.innerHTML = todos.map(item => {
        const isEditing = editingId === item.id;
        return `
            <div class="todo-item ${item.done ? 'done' : ''}">
                <div class="todo-content">
                    <div class="circle" onclick="toggleTodo(${item.id})"></div>
                    ${isEditing ?
                `<input type="text" class="edit-input" id="input-${item.id}" value="${item.task}">` :
                `<span onclick="toggleTodo(${item.id})">${item.task}</span>`
            }
                </div>
                <div class="actions">
                    <button class="edit-btn" onclick="startEdit(${item.id})">✏️</button>
                    <button class="delete-btn" onclick="deleteTodo(${item.id})">🗑</button>
                </div>
            </div>
        `;
    }).join("");
    if (editingId) {
        const input = document.getElementById(`input-${editingId}`);
        input.focus();
        input.select();

        input.onkeydown = (e) => {
            if (e.key === "Enter") saveEdit(editingId, input.value);
            if (e.key === "Escape") cancelEdit();
        };
    }
};
const saveToLocal = () => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
};
const addTodo = () => {
    const input = document.querySelector("#todo-input");
    const taskText = input.value.trim();
    if (taskText !== "") {
        todos.unshift({ id: Date.now(), task: taskText, done: false });
        saveToLocal();
        renderTodos();
        input.value = "";
    }
};
window.toggleTodo = (id) => {
    todos = todos.map(item => item.id === id ? { ...item, done: !item.done } : item);
    saveToLocal();
    renderTodos();
};
window.deleteTodo = (id) => {
    const todo = todos.find(item => item.id === id);
    if (window.confirm(`Bạn có chắc muốn xóa: "${todo.task}"?`)) {
        todos = todos.filter(item => item.id !== id);
        saveToLocal();
        renderTodos();
    }
};
window.startEdit = (id) => {
    editingId = id;
    renderTodos();
};
const saveEdit = (id, newText) => {
    const trimmedText = newText.trim();
    if (trimmedText !== "") {
        todos = todos.map(item => item.id === id ? { ...item, task: trimmedText } : item);
        saveToLocal();
    }
    editingId = null;
    renderTodos();
};
const cancelEdit = () => {
    editingId = null;
    renderTodos();
};
document.querySelector("#add-btn").onclick = addTodo;
document.querySelector("#todo-input").onkeypress = (e) => e.key === "Enter" && addTodo();

renderTodos();