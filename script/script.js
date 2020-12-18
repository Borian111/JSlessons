'use strict'
const todoControl = document.getElementsByClassName('todo-control');
const headerInput = document.getElementsByClassName('header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
console.log(todoControl);
console.log(headerInput);
const todoData = [
    {
         value: 'Сварить кофе',
         completed: false
    },
    {
        value: 'Помыть посуду',
        completed: true

    }


];
const render = function(){
    todoData.forEach(function(item){
       const li = document.createElement('li');
       li.classList.add('todo-item');
       
       li.innerHTML = '<span class="text-todo">Сварить кофе</span>'
        console.log(item);
    });
};

todoControl.addEventListener('submit', function(event){
     event.preventDefault();
     const newTodo = {
        value: headerInput.value,
        completed: false

     };  
     todoData.push(newTodo);

     render();
});