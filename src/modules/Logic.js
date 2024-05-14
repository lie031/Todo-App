import Task from "./Task";
import Project from "./Project";
import Storage from "./Storage";


export function createProject(name){
    const project = new Project(name);
    Storage.projects.push(project);
    Storage.saveProjects();
}

export function createTask(projectName, title, description, date, priority) {
    const task = new Task(title, description, date, priority);
    const project = Storage.projects.find(proj => proj.name === projectName);
    if (project) {
        project.addTask(task);
        Storage.saveProjects();
    }
}
