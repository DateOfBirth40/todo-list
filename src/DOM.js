/* eslint-disable require-jsdoc */
import {todoFactory} from './index.js';

const todoList = document.querySelector('#todo-list');
const taskForm = document.querySelector('#task-form');

function displayForm(form) {
  form.style.display = 'block';
}

function hideForm(form) {
  form.style.display = 'none';
}

function getFormData(form) {
  const title = document.querySelector('#title').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const notes = document.querySelector('#notes').value;
  const newTask = todoFactory(title, date, time, notes, false);
  console.log(newTask);
  return newTask;
}

function createTaskElement() {
  const li = document.createElement('li');
  const check = document.createElement('div');
  check.classList.add('check-btn', 'unchecked');
  const formData = getFormData(taskForm);
  li.textContent = formData.title;
  li.prepend(check);
  hideForm(taskForm);
  todoList.appendChild(li);
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

export {
  createTaskElement,
  getFormData,
  completeTask,
  displayForm,
  taskForm,
  todoList,
};
