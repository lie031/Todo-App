import Dom from "./dom";
import Storage from "./storage";
const domHandler = new Dom();
export default class Handlers{
    
    static modalAddBtn(){
        domHandler.modalBtn.addEventListener('click',()=>{
            if(domHandler.modalTitle.value !== ""){
             domHandler.addTodo();
            }
        })
    }
    
    static openModal(){
        domHandler.newTodoBtn.addEventListener('click',()=>{
              domHandler.modal.showModal();     
        });
        domHandler.modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });   
    }

    static clickEvent() {
        // Use event delegation to handle dynamically added delete buttons
        domHandler.content.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-btn')) {
                // Get the index of the clicked delete button
                const index = Array.from(domHandler.content.children).indexOf(event.target.parentElement);
                console.log(index);
                
                // Delete the todo from storage
                Storage.deleteTodo(index);
    
                // Remove the todo from the DOM
                event.target.parentElement.remove();

            }
        });
    }
}