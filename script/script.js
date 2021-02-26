'use strict'
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
let todoData = [];

const render = function(){
       todoList.textContent = '';
       todoCompleted.textContent = '';
       
      todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>'+
            '<div class="todo-buttons">' + 
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';
             
        if(item.completed){
            todoCompleted.append(li);
               } else{
                  todoList.append(li);
               }
                       
         const btntodoCompleted = li.querySelector('.todo-complete');
         btntodoCompleted.addEventListener('click', function(){     
         item.completed = !item.completed;
         localStorage.setItem('todo', JSON.stringify(todoData));
                  render();
               });

         const btntodoRemove = li.querySelector(".todo-remove");
         btntodoRemove.addEventListener('click', function() {
            let i=todoData.indexOf(item);
               if(i>= 0){
                  todoData.splice(i,1);
               }            
            localStorage.setItem('todo', JSON.stringify(todoData));
            render();
            });
         });
};

todoControl.addEventListener('submit', function(event){
     event.preventDefault(); 
    });
todoControl.addEventListener('submit', function(){
   if(headerInput.value ==='') {
        alert('Заполните поле!')
   }else {  
     const newTodo = {
        value: headerInput.value,
        completed: false
     }; 
      
     todoData.push(newTodo);
     localStorage.setItem('todo', JSON.stringify(todoData)); 
     render();
     headerInput.value ='';
   }
      });
         
      if(localStorage.getItem('todo')) {   
        todoData = JSON.parse(localStorage.getItem('todo'));
        render();
       }       
    
render();