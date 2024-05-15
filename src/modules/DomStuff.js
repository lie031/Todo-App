import { createProject, createTask } from './Logic';
import Storage from './Storage';

export function projectHandler() {
    document.addEventListener('DOMContentLoaded', () => {
        const projectButton = document.querySelector('.createProjectBtn');
        const projectNameInput = document.querySelector('.projectName');
        const taskModal = document.getElementById('taskModal');
        const taskButton = document.querySelector('.createTaskBtn');
        const taskTitleInput = document.querySelector('.taskTitle');
        const taskDescriptionInput = document.querySelector('.taskDescription');
        const taskDateInput = document.querySelector('.taskDate');
        const taskPriorityInput = document.querySelector('.taskPriority');
        const projectsContainer = document.querySelector('.projects');
        const tasksContainer = document.querySelector('.tasks');
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
                const projectName = activeProject.querySelector('.project-name').textContent.trim();
                const taskTitle = taskTitleInput.value.trim();
                const taskDescription = taskDescriptionInput.value.trim();
                const taskDate = taskDateInput.value;
                const taskPriority = taskPriorityInput.value;
                if (taskTitle && taskDescription && taskDate && taskPriority) {
                    createTask(projectName, taskTitle, taskDescription, taskDate, taskPriority);
                    displayTask(taskTitle, taskDate);
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
            const projectElement = e.target.closest('.project');
            if (projectElement) {
                if (e.target.classList.contains('delete-project') || e.target.closest('.delete-project')) {
                    const projectName = projectElement.querySelector('.project-name').textContent.trim();
                    deleteProject(projectName);
                    projectElement.remove();
                    tasksContainer.innerHTML = '';
                } else {
                    document.querySelectorAll('.project').forEach(proj => proj.classList.remove('active'));
                    projectElement.classList.add('active');
                    loadAndDisplayTasks(projectElement.querySelector('.project-name').textContent.trim());
                }
            }
        });

        tasksContainer.addEventListener('click', (e) => {
            const taskElement = e.target.closest('.task');
            if (taskElement) {
                if (e.target.classList.contains('delete-task') || e.target.closest('.delete-task')) {
                    const taskTitle = taskElement.querySelector('.task-title').textContent.trim();
                    const activeProject = document.querySelector('.project.active');
                    if (activeProject) {
                        const projectName = activeProject.querySelector('.project-name').textContent.trim();
                        deleteTask(projectName, taskTitle);
                        taskElement.remove();
                    }
                }
            }
        });

        loadAndDisplayProjects();
    });
}

function displayProject(projectName) {
    const projectsContainer = document.querySelector('.projects');
    const project = document.createElement('div');
    project.classList.add('project');
    project.innerHTML = `
        <span class="project-name">${projectName}</span>
        <button class="delete-project deleteBtn"><i class="fas fa-trash-alt"></i></button>
    `;
    projectsContainer.appendChild(project);
}

function displayTask(taskTitle, taskDate) {
    const tasksContainer = document.querySelector('.tasks');
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
        <div class="task-info">
            <span class="task-title">${taskTitle}</span>
            <span class="task-date">${taskDate}</span>
        </div>
        <button class="delete-task deleteBtn"><i class="fas fa-trash-alt"></i></button>
    `;
    tasksContainer.appendChild(task);
}

function loadAndDisplayProjects() {
    Storage.loadProjects();
    Storage.projects.forEach(project => {
        displayProject(project.name);
    });
}

function loadAndDisplayTasks(projectName) {
    const tasksContainer = document.querySelector('.tasks');
    tasksContainer.innerHTML = '';
    const project = Storage.projects.find(proj => proj.name === projectName);
    if (project) {
        project.taskList.forEach(task => {
            displayTask(task.title, task.date);
        });
    }
}

function deleteProject(projectName) {
    const projectIndex = Storage.projects.findIndex(proj => proj.name === projectName);
    if (projectIndex > -1) {
        Storage.projects.splice(projectIndex, 1);
        Storage.saveProjects();
    }
}

function deleteTask(projectName, taskTitle) {
    const project = Storage.projects.find(proj => proj.name === projectName);
    if (project) {
        const taskIndex = project.taskList.findIndex(task => task.title === taskTitle);
        if (taskIndex > -1) {
            project.taskList.splice(taskIndex, 1);
            Storage.saveProjects();
        }
    }
}