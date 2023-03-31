/* eslint-disable max-len */
import './style.css';
import {createTaskElement, getFormData, completeTask, displayForm, taskForm, todoList} from './DOM.js';

const todoFactory = (title, dueDate, dueTime, notes, checklist) => {
  return {title, dueDate, dueTime, notes, checklist};
};

const createNewTaskBtn = document.querySelector('#add-todo');
createNewTaskBtn.addEventListener('click', function() {
  displayForm(taskForm);
});

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('check-btn')) {
    completeTask(event);
  }
});

const addTaskInput = document.querySelector('#add-input-btn');
addTaskInput.addEventListener('click', createTaskElement);
