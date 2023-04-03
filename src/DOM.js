/* eslint-disable require-jsdoc */
import {todoFactory} from './index.js';

const todoList = document.querySelector('#todo-list');
const taskForm = document.querySelector('#task-form');
const categoryForm = document.querySelector('#category-form');

function displayElement(element) {
  element.style.display = 'block';
}

function hideElement(element) {
  element.style.display = 'none';
}

function getFormData(form) {
  const title = document.querySelector('#title').value;
  const category = document.querySelector('#category').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const notes = document.querySelector('#notes').value;
  const newTask = todoFactory(title, category, date, time, notes, false);
  console.log(newTask);
  return newTask;
}

function createTaskElement() {
  // Turn these into a flex div that shows title, date, category, priority
  const li = document.createElement('li');
  const check = document.createElement('div');
  check.classList.add('check-btn', 'unchecked');
  const formData = getFormData(taskForm);
  li.textContent = formData.title;
  li.prepend(check);
  hideElement(taskForm);
  todoList.appendChild(li);
  taskForm.reset();
}

function completeTask(event) {
  // Add a class that styles the font to be greyed out
  // Send to bottom of list
  const clickedBtn = event.target;
  if (clickedBtn.classList.contains('unchecked')) {
    clickedBtn.classList.remove('unchecked');
    clickedBtn.classList.add('checked');
  } else if (clickedBtn.classList.contains('checked')) {
    clickedBtn.classList.add('unchecked');
    clickedBtn.classList.remove('checked');
  }
}

// Create a dropdown of the category list items that is prompted
// when creating a new task
function createCategory() {
  const categoryList = document.querySelector('#category-list');
  const newCat = document.createElement('li');
  newCat.textContent = document.querySelector('#category').value;
  categoryList.appendChild(newCat);
  hideElement(categoryForm);
  categoryForm.reset();
}

// Add an X button next to all list items to allow them to be deleted

export {
  createTaskElement,
  getFormData,
  completeTask,
  createCategory,
  displayElement,
  hideElement,
  taskForm,
  categoryForm,
  todoList,
};
