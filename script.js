function addTask() {
    const taskInput = document.getElementById("task").value;
    const dateInput = document.getElementById("date").value;
    const startTimeInput = document.getElementById("start-time").value;
    const endTimeInput = document.getElementById("end-time").value;

    if (taskInput === "" || dateInput === "" || startTimeInput === "" || endTimeInput === "") {
        alert("Please fill out all fields!");
        return;
    }

    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");

    listItem.innerHTML = `${taskInput} - ${dateInput} [${startTimeInput} - ${endTimeInput}]
        <button class="delete" onclick="deleteTask(this)">Remove</button>`;

    taskList.appendChild(listItem);
}

function deleteTask(button) {
    button.parentElement.remove();
}
