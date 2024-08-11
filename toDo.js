let tasks = [
    {title: "Investigate data structure.", category: "BackEnd"},
    {title: "Start the design of the app home.", category: "UX-UI"},
    {title: "Scrum daily meeting.", category: "Proyect"},
    {title: "Implement redux on React app.", category: "FrontEnd"}
]

const colors = ['#FD6C2D', '#FD3619', '#4096ee'];

let randomColor = () => colors[Math.floor(Math.random() * colors.length)];

function listRender(array){
    let list = array.map(task => `
        <div class="taskCont" style="background-color: ${randomColor()}">
            <h4 class="task-title">${task.title}</h4>
            <p class="task-category">Category: ${task.category}</p>
            <button class="deleteBtn" name="${task.title}">Delete</button>
        </div>
    `).join(''); 
    document.getElementById('list').innerHTML = list;

    document.querySelectorAll('.deleteBtn').forEach(button => {
        button.addEventListener('click', (event) => {
            tasks = tasks.filter(el=> el.title !== event.target.name)
            listRender(tasks);
        });
    });
};

listRender(tasks);

const addInput = document.getElementById("addInput");
const addSelect = document.getElementById("addSelect");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const showAllBtn = document.getElementById("showAllBtn");

addBtn.addEventListener('click', (e)=>{
    let newTask = {}; 
    let title = addInput.value;
    let category = addSelect.value;

    newTask = {title, category};

    if(!newTask.title || !newTask.category){
        alert("The task needs a title and category to save.")
    }
    else{
        tasks.unshift(newTask);
        listRender(tasks);
    }
});

showAllBtn.addEventListener("click", ()=>{
    listRender(tasks);
});

searchInput.addEventListener("keypress", (e)=>{
    let searchedtasks = tasks.filter(el=> el.title.includes(e.target.value))
    listRender(searchedtasks);
})