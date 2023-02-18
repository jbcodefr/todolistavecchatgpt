const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function() {
  if (taskInput.value !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskInput.value;
    taskList.appendChild(taskItem);
    taskInput.value = "";
    
    taskItem.addEventListener("click", function() {
      taskItem.classList.toggle("completed");
    });
  }
});
