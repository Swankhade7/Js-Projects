let task1 = document.getElementById("task1")

const createBtn = document.getElementById('createBtn');
const allTasks = document.getElementById('allTasks');

let taskList = [];

let i = 0;

createBtn.addEventListener('click', () => {
    let task_text = task1.value;
    taskList.push(task_text);
    let li = document.createElement('li');
    li.innerText = taskList[i];
    allTasks.appendChild(li);
    i++;
});

