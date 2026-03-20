
let todos = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");
const totalCount = document.getElementById("totalCount");


function renderTodos() {
  taskList.innerHTML = "";

  if (todos.length === 0) {
    taskList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <div class="empty-state-text">
          Chưa có công việc nào. Hãy thêm công việc mới!
        </div>
      </div>
    `;
    updateCounter();
    return;
  }

  todos.forEach((todo) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.id = todo.id;

    taskItem.innerHTML = `
      <input type="checkbox" class="task-checkbox" ${
        todo.completed ? "checked" : ""
      } />
      <span class="task-text ${
        todo.completed ? "completed" : ""
      }">${todo.text}</span>
      <div class="task-actions">
        <button class="btn-edit">✏️ Sửa</button>
        <button class="btn-delete">🗑️ Xóa</button>
      </div>
    `;

    const checkbox = taskItem.querySelector(".task-checkbox");
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      renderTodos();
    });


    const deleteBtn = taskItem.querySelector(".btn-delete");
    deleteBtn.addEventListener("click", () => {
      if (confirm("Bạn có chắc muốn xóa không?")) {
        todos = todos.filter((t) => t.id !== todo.id);
        renderTodos();
      }
    });

    const editBtn = taskItem.querySelector(".btn-edit");
    editBtn.addEventListener("click", () => {
      editTodo(todo.id);
    });

    taskList.appendChild(taskItem);
  });

  updateCounter();
}

function addTodo() {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Không được để trống!");
    return;
  }

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  todos.push(newTodo);
  taskInput.value = "";
  taskInput.focus();

  renderTodos();
}

function editTodo(id) {
  const todo = todos.find((t) => t.id === id);

  const newText = prompt("Chỉnh sửa công việc:", todo.text);

  if (newText === null) return;

  if (newText.trim() === "") {
    alert("Không được để trống!");
    return;
  }

  todo.text = newText.trim();
  renderTodos();
}

function updateCounter() {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  totalCount.textContent = total;
  completedCount.textContent = completed;
}

addBtn.addEventListener("click", addTodo);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

renderTodos();