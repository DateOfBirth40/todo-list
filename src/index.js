/* eslint-disable max-len */
import './style.css';
import {createTaskElement, completeTask, createCategory, displayBlock, displayGrid, hideElement, taskForm, categoryForm, catInput, todoList} from './DOM.js';

const todoFactory = (title, category, dueDate, dueTime, notes, completed) => {
  // const ;
  return {title, category, dueDate, dueTime, notes, completed};
};

hideElement(taskForm);
hideElement(categoryForm);
const createNewTaskBtn = document.querySelector('#add-todo');
createNewTaskBtn.addEventListener('click', function() {
  hideElement(createNewTaskBtn);
  displayGrid(taskForm);
});

const displayCategoryFormBtn = document.querySelector('#display-category-form');
displayCategoryFormBtn.addEventListener('click', function() {
  displayBlock(categoryForm);
  hideElement(displayCategoryFormBtn);
});

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('check-btn')) {
    completeTask(event);
  }
});

const addTaskInput = document.querySelector('#add-input-btn');
addTaskInput.addEventListener('click', createTaskElement);

const cancelTaskInput = document.querySelector('#cancel-input-btn');
cancelTaskInput.addEventListener('click', function() {
  hideElement(taskForm);
  taskForm.reset();
  displayBlock(createNewTaskBtn);
});

const categoryAddBtn = document.querySelector('#add-category-btn');
categoryAddBtn.addEventListener('click', function() {
  createCategory();
  displayBlock(displayCategoryFormBtn);
});

export {
  todoFactory,
  createNewTaskBtn,
  displayCategoryFormBtn,
};
