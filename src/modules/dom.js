import Storage from "./storage";

export default class Dom{
    constructor(){
    this.modal =document.querySelector('#modal');
    this.newTodoBtn = document.querySelector('.new-todo');
    this.content = document.querySelector('.content');
    this.modalTitle = document.querySelector('#title');
    this.modalDescription = document.querySelector('#description');
    this.modalDate = document.querySelector('#date');
    this.modalBtn = document.querySelector('#addBtn');
    this.home = document.querySelector('#home');
    this.today = document.querySelector('#today');
    this.week = document.querySelector('#week');
    }
    
    addTodo(){
        const todo = document.createElement('div');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const date = document.createElement('p');
        const deleteBtn = document.createElement('button')

        title.textContent = this.modalTitle.value;
        description.textContent = this.modalDescription.value;
        date.textContent = this.modalDate.value;
        deleteBtn.textContent = 'delete';
        deleteBtn.classList.add('delete-btn');

        todo.appendChild(title);
        todo.appendChild(description);
        todo.appendChild(date);
        todo.appendChild(deleteBtn);

        this.content.appendChild(todo);
        Storage.setTodo(title.textContent,description.textContent,date.textContent);
        Storage.saveTodos();
        console.log(Storage.getTodos());
    }

    renderTodos(){
         const todos = Storage.storageTodos();
         Storage.todos = todos;
         console.log(todos);

         if(todos!==null){
            todos.forEach(t => {
            const todo = document.createElement('div');
            const title = document.createElement('p');
            const description = document.createElement('p');
            const date = document.createElement('p');
            const deleteBtn = document.createElement('button');

            title.textContent = t.title;
            description.textContent = t.description;
            date.textContent = t.date;
            deleteBtn.textContent = 'delete';
            deleteBtn.classList.add('delete-btn');

            todo.appendChild(title);
            todo.appendChild(description);
            todo.appendChild(date);
            todo.appendChild(deleteBtn);

            this.content.appendChild(todo);
         });
         }
    }

    renderTodaytodos(){
        const todos = Storage.storageTodos();
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth()+1).toString().padStart(2,'0');
        const day = date.getDate().toString().padStart(2,'0');
        const todayDate = `${year}-${month}-${day}`;
        console.log(todayDate);
        todos.forEach(todo=>console.log(todo.date));
        const todosfilter = todos.filter((todo)=>todo.date == todayDate);
        console.log(todosfilter);

        if(todosfilter!==null){
            todosfilter.forEach(t => {
            const todo = document.createElement('div');
            const title = document.createElement('p');
            const description = document.createElement('p');
            const date = document.createElement('p');
            const deleteBtn = document.createElement('button');

            title.textContent = t.title;
            description.textContent = t.description;
            date.textContent = t.date;
            deleteBtn.textContent = 'delete';
            deleteBtn.classList.add('delete-btn');

            todo.appendChild(title);
            todo.appendChild(description);
            todo.appendChild(date);
            todo.appendChild(deleteBtn);

            this.content.appendChild(todo);
            })
        }
    }

} 
