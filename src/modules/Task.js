
export default class Task{

    project = null;

    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }

    setProject(project){
        this.project=project;
    }

}