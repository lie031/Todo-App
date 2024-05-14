import { createProject, createTask } from './Logic';
import Storage from './Storage';

export function projectHandler() {
    const projectButton = document.querySelector('.createProjectBtn');
    const projectNameInput = document.querySelector('.projectName');
    const taskModal = document.getElementById('taskModal');
    const taskButton = document.querySelector('.createTaskBtn');
    const taskTitleInput = document.querySelector('.taskTitle');
    const taskDescriptionInput = document.querySelector('.taskDescription');
    const taskDateInput = document.querySelector('.taskDate');
    const taskPriorityInput = document.querySelector('.taskPriority');
    const projectsContainer = document.querySelector('.projects');
    const openModalBtn = document.querySelector('.openModalBtn');
    const closeModalBtn = document.querySelector('.modal .close');

    projectButton.addEventListener('click', () => {
        const projectName = projectNameInput.value.trim();
        if (projectName) {
            createProject(projectName);
            displayProject(projectName);
            projectNameInput.value = '';
            console.log('Project created');
        }
    });

    openModalBtn.addEventListener('click', () => {
        taskModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        taskModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === taskModal) {
            taskModal.style.display = 'none';
        }
    });

    taskButton.addEventListener('click', () => {
        const activeProject = document.querySelector('.project.active');
        if (activeProject) {
            const projectName = activeProject.textContent.trim();
            const taskTitle = taskTitleInput.value.trim();
            const taskDescription = taskDescriptionInput.value.trim();
            const taskDate = taskDateInput.value;
            const taskPriority = taskPriorityInput.value;
            if (taskTitle && taskDescription && taskDate && taskPriority) {
                createTask(projectName, taskTitle, taskDescription, taskDate, taskPriority);
                displayTask(taskTitle);
                taskTitleInput.value = '';
                taskDescriptionInput.value = '';
                taskDateInput.value = '';
                taskPriorityInput.value = '';
                taskModal.style.display = 'none';
                console.log('Task created');
            }
        }
    });

    projectsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('project')) {
            document.querySelectorAll('.project').forEach(proj => proj.classList.remove('active'));
            e.target.classList.add('active');
            loadAndDisplayTasks(e.target.textContent.trim());
        }
    });

    loadAndDisplayProjects();
}

function displayProject(projectName) {
    const projectsContainer = document.querySelector('.projects');
    const projectElement = document.createElement('div');
    projectElement.textContent = projectName;
    projectElement.classList.add('project');
    projectsContainer.appendChild(projectElement);
}

function displayTask(taskTitle) {
    const tasksContainer = document.querySelector('.tasks');
    const taskElement = document.createElement('div');
    taskElement.textContent = taskTitle;
    taskElement.classList.add('task');
    tasksContainer.appendChild(taskElement);
}

function loadAndDisplayProjects() {
    Storage.loadProjects();
    Storage.projects.forEach(project => {
        displayProject(project.name);
    });
    if (Storage.projects.length > 0) {
        const firstProject = document.querySelector('.project');
        firstProject.classList.add('active');
        loadAndDisplayTasks(firstProject.textContent.trim());
    }
}

function loadAndDisplayTasks(projectName) {
    const tasksContainer = document.querySelector('.tasks');
    tasksContainer.innerHTML = '';
    const project = Storage.projects.find(proj => proj.name === projectName);
    if (project) {
        project.taskList.forEach(task => {
            displayTask(task.title);
        });
    }
}