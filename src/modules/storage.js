export default class Storage{

     static todos = [];

     static setTodo(title,description,date){
        const todo = {
            title,
            description,
            date
        }
        this.todos.push(todo);
    }

     static getTodos(){
        return this.todos;
    }

    static deleteTodo(i){
        this.todos.splice(i,1);
        this.saveTodos();
        
    }

    static saveTodos(){
        localStorage.setItem("allTodos",JSON.stringify(this.getTodos()));
    }

    static storageTodos(){
        const allTodos = JSON.parse(localStorage.getItem("allTodos"));
        return allTodos;
    }
}
