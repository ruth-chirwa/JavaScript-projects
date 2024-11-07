// DOM Elements
const taskInput = document.getElementById('taskInput');
const categoryInput = document.getElementById('categoryInput');
const priorityInput = document.getElementById('priorityInput');
const deadlineInput = document.getElementById('deadlineInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

// Load tasks from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    toggleDarkModeState();
});

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
searchInput.addEventListener('input', filterTasks);
toggleDarkModeButton.addEventListener('click', toggleDarkMode);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const category = categoryInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    if (taskText === "") return;

    const task = {
        text: taskText,
        category: category,
        priority: priority,
        deadline: deadline,
        completed: false
    };

    const tasks = getTasksFromStorage();
    tasks.push(task);
    saveTasksToStorage(tasks);

    taskInput.value = "";
    categoryInput.value = "Work";
    priorityInput.value = "Medium";
    deadlineInput.value = "";
    loadTasks();
}

// Function to delete a task
function deleteTask(index) {
    const tasks = getTasksFromStorage();
    tasks.splice(index, 1);
    saveTasksToStorage(tasks);
    loadTasks();
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
    const tasks = getTasksFromStorage();
    tasks[index].completed = !tasks[index].completed;
    saveTasksToStorage(tasks);
    loadTasks();
}

// Function to load tasks from localStorage
function loadTasks() {
    taskList.innerHTML = "";

    const tasks = getTasksFromStorage();

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <span class="task-text" onclick="toggleTaskCompletion(${index})">${task.text}</span>
            <div class="task-details">
                <span class="category">${task.category}</span>
                <span class="priority">${task.priority}</span>
                <span class="deadline">${task.deadline ? task.deadline : 'No deadline'}</span>
            </div>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to filter tasks based on search input
function filterTasks() {
    const searchTerm = searchInput.value.toLowerCase();
    const tasks = getTasksFromStorage();
    const filteredTasks = tasks.filter(task => 
        task.text.toLowerCase().includes(searchTerm) || 
        task.category.toLowerCase().includes(searchTerm) || 
        task.priority.toLowerCase().includes(searchTerm)
    );
    
    renderTaskList(filteredTasks);
}

// Function to render tasks
function renderTaskList(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <span class="task-text" onclick="toggleTaskCompletion(${index})">${task.text}</span>
            <div class="task-details">
                <span class="category">${task.category}</span>
                <span class="priority">${task.priority}</span>
                <span class="deadline">${task.deadline ? task.deadline : 'No deadline'}</span>
            </div>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}