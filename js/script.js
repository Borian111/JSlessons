'use strict';

class Todo {
    constructor(form, input, todoList, todoCompleted){
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    }

    addToStorage() {
        localStorage.setItem('toDoList',JSON.stringify([...this.todoData]))
    }

    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();  
    
    }

    createItem(todo){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>  
        `);
        this.input.value = '';
       
        if(todo.completed) {
            this.todoCompleted.append(li);
        }else {
            this.todoList.append(li);
        }
     }

    addTodo(e) {
        e.preventDefault();
        if (this.input.value.trim()){
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(),
            };
            this.todoData.set(newTodo.key, newTodo);
            this.render() 
        }
    }

    generateKey(){
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    deleteItem(target) {
        let li = target.closest('li');
        this.todoData.delete(li.key);
        li.remove();
        this.addToStorage();
    }

    completedItem(target) {
        let li = target.closest('li');
        let key = li.key;
        if(this.todoData.get(key).completed){
            this.todoData.get(key).completed = false;
            this.todoList.append(li);
            this.addToStorage();
        }else {
            this.todoData.get(key).completed = true;
            this.todoCompleted.append(li);
            this.addToStorage();
        }
    }
   
    handler() {
        const todoContainer = document.querySelector('.todo-container');

        todoContainer.addEventListener('click', (e) =>{
            let target=e.target;
            if (target.matches('.todo-remove')){
                this.deleteItem(target);
            }else if (target.matches('.todo-complete')){
            this.completedItem(target);
            }
        });
    }
    
    
    
    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this))
        this.render();
    }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed')

todo.init();
todo.handler();