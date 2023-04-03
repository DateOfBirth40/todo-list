/* eslint-disable max-len */
import './style.css';
import {createTaskElement, getFormData, completeTask, createCategory, displayElement, hideElement, taskForm, categoryForm, todoList} from './DOM.js';

const todoFactory = (title, category, dueDate, dueTime, notes, checklist) => {
  // const ;
  return {title, category, dueDate, dueTime, notes, checklist};
};

hideElement(taskForm);
hideElement(categoryForm);
const createNewTaskBtn = document.querySelector('#add-todo');
createNewTaskBtn.addEventListener('click', function() {
  displayElement(taskForm);
});
const displayCategoryFormBtn = document.querySelector('#display-category-form');
displayCategoryFormBtn.addEventListener('click', function() {
  displayElement(categoryForm);
  hideElement(displayCategoryFormBtn);
});

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('check-btn')) {
    completeTask(event);
  }
});

const addTaskInput = document.querySelector('#add-input-btn');
addTaskInput.addEventListener('click', createTaskElement);

const categoryAddBtn = document.querySelector('#add-category-btn');
categoryAddBtn.addEventListener('click', function() {
  createCategory();
  displayElement(displayCategoryFormBtn);
});

export {
  todoFactory,
  displayCategoryFormBtn,
};
