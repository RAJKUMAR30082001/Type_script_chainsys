interface ToDoList {
    name: string;
}

class Task {
    constructor(public name: ToDoList) {}
}

class ToDoListManager {
    private tasks: Task[] = [];
    // private taskIdCounter=0;

    addToList(name: string): void {
        const newTask = new Task({name:name});
        this.tasks.push(newTask);
        this.display();
    }

    display(): void {
        const list = document.getElementById("taskList") as HTMLUListElement;
        list.innerHTML = '';

        for (let i=0;i<this.tasks.length;i++){
            const li = document.createElement('li');
            li.textContent = `${i+1}: ${this.tasks[i].name.name} `;
            console.log(this.tasks[i])
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener('click', () => this.deleteTask(i));

            li.appendChild(deleteButton);
            list.appendChild(li);
        };
    }

    deleteTask(id: number): void {
        for(let i=0;i<this.tasks.length;i++){
            if(id===i){
                this.tasks.splice(i, 1);
                break
            }
        }
        this.display();
    }
}

const todoListManager = new ToDoListManager();

const btn = document.getElementById("submit") as HTMLButtonElement;
btn.addEventListener('click', () => {
    const nameInput = document.getElementById("taskInput") as HTMLInputElement;
    const nameValue = nameInput.value;
    todoListManager.addToList(nameValue);
    nameInput.value = ''; // Clear the input after adding
});
