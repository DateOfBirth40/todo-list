/* eslint-disable max-len */
import './style.css';
import {createTodoElement, completeTask, todoList} from './DOM.js';

const todoFactory = (title, description, dueDate, notes, checklist) => {
  return {title, description, dueDate, notes, checklist};
};

const addTodoBtn = document.querySelector('#add-todo');
addTodoBtn.addEventListener('click', createTodoElement);

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('check-btn')) {
    completeTask(event);
  }
});
