let todos = [];

function loadData() {
    let data = localStorage.getItem("todos");
    if (data) {
        todos = JSON.parse(data);
    } else {
        todos = [];
    }
}

function saveData() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
    let list = document.getElementById("task-list");
    let stats = document.getElementById("stats");
    let str = "";

    if (todos.length === 0) {
        list.innerHTML = `<div class="empty">Chưa có công việc nào. Hãy thêm mới nhé!</div>`;
        stats.innerText = "Tổng công việc: 0 | Đã hoàn thành: 0 (0%)";
        return;
    }

    let done = 0;

    for (let i = 0; i < todos.length; i++) {

        if (todos[i].completed) {
            done++;
        }

        str += `
<li class="${todos[i].completed ? "done" : ""}">
<span onclick="toggleTask(${i})">${todos[i].text}</span>
<div class="actions">
<button onclick="editTask(${i})">✏️</button>
<button onclick="deleteTask(${i})">🗑️</button>
</div>
</li>
`;
    }

    list.innerHTML = str;

    let percent = Math.round(done / todos.length * 100);

    stats.innerText = `Tổng công việc: ${todos.length} | Đã hoàn thành: ${done} (${percent}%)`;
}

function addTask() {
    let input = document.getElementById("task-input");
    let text = input.value.trim();

    if (text === "") return;

    todos.push({
        text: text,
        completed: false
    });

    input.value = "";
    saveData();
    render();
}

function toggleTask(index) {
    todos[index].completed = !todos[index].completed;
    saveData();
    render();
}

function deleteTask(index) {
    todos.splice(index, 1);
    saveData();
    render();
}

function editTask(index) {
    let newText = prompt("Chỉnh sửa công việc", todos[index].text);
    if (newText !== null && newText.trim() !== "") {
        todos[index].text = newText.trim();
        saveData();
        render();
    }
}

function clearAll() {
    if (todos.length === 0) return;

    let ok = confirm("Bạn có chắc chắn muốn xóa TOÀN BỘ công việc chuẩn bị Tết không? Hành động này không thể hoàn tác.");

    if (ok) {
        todos = [];
        localStorage.removeItem("todos");
        render();
    }
}

document.getElementById("add-btn").onclick = addTask;
document.getElementById("clear-btn").onclick = clearAll;

loadData();
render();