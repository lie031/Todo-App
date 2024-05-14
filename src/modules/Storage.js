import Project from "./Project";

export default class Storage{

    static projects = [];
    static tasks = [];

    static saveProjects(){
        localStorage.setItem("projects",JSON.stringify(Storage.projects))
    }

    static saveTask(){
        localStorage.setItem("tasks", JSON.stringify(Storage.tasks))
    }

    static loadProjects() {
        const projects = localStorage.getItem("projects");
        if (projects) {

            const projectObjects = JSON.parse(projects);
            Storage.projects = projectObjects.map(projectData => {
                const project = new Project(projectData.name);
                project.taskList = projectData.taskList; // Assuming tasks are simple objects here
                return project;
            });
            
        }else{
            Storage.createDefaultProject();
        }
    }

    static loadTasks() {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            Storage.tasks = JSON.parse(tasks);
        }
    }

    static createDefaultProject() {
        const defaultProject = new Project('Default Project');
        Storage.projects.push(defaultProject);
        Storage.saveProjects();
    }



}