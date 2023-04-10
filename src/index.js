/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import './style.css';
import {createTaskElement, completeTask, createCategory, changeDisplay, createOptionArray, taskForm, categoryForm, todoList} from './DOM.js';

const todoFactory = (title, category, dueDate, dueTime, notes, completed) => {
  // const ;
  return {title, category, dueDate, dueTime, notes, completed};
};

changeDisplay(taskForm, 'none');
changeDisplay(categoryForm, 'none');
const createNewTaskBtn = document.querySelector('#add-todo');
createNewTaskBtn.addEventListener('click', function() {
  changeDisplay(createNewTaskBtn, 'none');
  changeDisplay(taskForm, 'grid');
});

const displayCategoryFormBtn = document.querySelector('#display-category-form');
displayCategoryFormBtn.addEventListener('click', function() {
  changeDisplay(categoryForm, 'block');
  changeDisplay(displayCategoryFormBtn, 'none');
});

// const categoryListItems = document.querySelectorAll('#category-list li');
const categoryAddBtn = document.querySelector('#add-category-btn');
categoryAddBtn.addEventListener('click', function() {
  createCategory();
  createOptionArray();
  changeDisplay(displayCategoryFormBtn, 'block');
});

const categoryCancelBtn = document.querySelector('#cancel-category-btn');
categoryCancelBtn.addEventListener('click', function() {
  changeDisplay(categoryForm, 'none');
  changeDisplay(displayCategoryFormBtn, 'block');
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
  changeDisplay(taskForm, 'none');
  taskForm.reset();
  changeDisplay(createNewTaskBtn, 'block');
});

export {
  todoFactory,
  createNewTaskBtn,
  displayCategoryFormBtn,
};
