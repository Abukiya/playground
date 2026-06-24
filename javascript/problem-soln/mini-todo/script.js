// Create a task Array
let tasks = [];

function updateList() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });
}


function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        tasks.push(taskText);
        taskInput.value = "";
        updateList();
    }
}

function clearAll() {
    tasks = [];
    updateList();
}
