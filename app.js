const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
console.log("taskList:", taskList);

let tasks = [];
let count = 0;

addBtn.addEventListener("click", function() {
    let task = taskInput.value.trim();

    if (task === ""){
        alert("Please enter a task!");
        return;
    }

    tasks.push(task);
    console.log(tasks);

    count++;

    let tr = document.createElement("tr");

    let numberTd = document.createElement("td");
    numberTd.innerText = count;

    let taskTd = document.createElement("td");
    taskTd.innerText = task;

    let doneTd = document.createElement("td");
    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";

    doneBtn.addEventListener("click", function(){
        taskTd.classList.toggle("completed");
    });
    doneTd.appendChild(doneBtn);

// delete ka btn

    let deleteTd = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function(){
        tr.remove();
    });
    
    deleteTd.appendChild(deleteBtn);

    tr.appendChild(numberTd);
    tr.appendChild(taskTd);
    tr.appendChild(doneTd);
    tr.appendChild(deleteTd);

    taskList.appendChild(tr);
    
    taskInput.value = "";
});