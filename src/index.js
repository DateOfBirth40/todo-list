/* eslint-disable max-len */
import './style.css';
import {createTaskObject, createTaskElement, completeTask, todoList, addTask} from './DOM.js';

const todoFactory = (title, dueDate, dueTime, notes, checklist) => {
  return {title, dueDate, dueTime, notes, checklist};
};

const addTodoBtn = document.querySelector('#add-todo');
addTodoBtn.addEventListener('click', createTaskObject);

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('check-btn')) {
    completeTask(event);
  }
});

addTask.addEventListener('click', createTaskElement);
