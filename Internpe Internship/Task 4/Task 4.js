document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-todo");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", function() {
        const task = todoInput.value.trim();
        if (task) {
            addTaskToList(task);
            todoInput.value = '';
        }
    });

    function addTaskToList(task) {
        const li = document.createElement("li");
        li.textContent = task;
        todoList.appendChild(li);
    }
});
