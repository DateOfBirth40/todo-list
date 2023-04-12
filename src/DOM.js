/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {todoFactory, createNewTaskBtn} from './index.js';
import {format} from 'date-fns';

const todoList = document.querySelector('#todo-list');
const taskForm = document.querySelector('#task-form');
const categoryForm = document.querySelector('#category-form');

function changeDisplay(element, type) {
  element.style.display = type;
}

const taskArr = [];
function getFormData(form) {
  const title = document.querySelector('#title').value;
  const category = document.querySelector('#category-select').value;
  const dateInput = document.querySelector('#date').value;
  let date;
  dateInput ? date = format(new Date(dateInput), 'P') : date = '';
  const time = document.querySelector('#time').value;
  const notes = document.querySelector('#notes').value;
  const newTask = todoFactory(title, category, date, time, notes, false);
  taskArr.push(newTask);
  console.log(newTask);
  console.log(taskArr);
  return newTask;
}

function createTaskElement() {
  const formData = getFormData(taskForm);
  const li = document.createElement('li');
  const titleText = document.createElement('h3');
  titleText.classList.add('task-title-text');
  titleText.textContent = formData.title;
  li.appendChild(titleText);

  const dateText = document.createElement('p');
  dateText.classList.add('task-date-text');
  dateText.textContent = formData.dueDate;
  li.appendChild(dateText);

  const timeText = document.createElement('p');
  timeText.classList.add('task-time-text');
  timeText.textContent = formData.dueTime;
  li.appendChild(timeText);

  const catText = document.createElement('p');
  catText.classList.add('task-cat-text');
  catText.textContent = formData.category;
  li.appendChild(catText);

  const notesText = document.createElement('p');
  notesText.classList.add('task-notes-text');
  notesText.textContent = formData.notes;
  li.appendChild(notesText);

  const check = document.createElement('div');
  check.classList.add('check-btn', 'unchecked');
  li.prepend(check);
  changeDisplay(taskForm, 'none');
  todoList.appendChild(li);
  taskForm.reset();
  changeDisplay(createNewTaskBtn, 'block');
}

function completeTask(e) {
  // Add a class that styles the font to be greyed out
  // Send to bottom of list
  // Find a way to get this to change the objects 'completed' prop. from false to true when clicked
  const clickedBtn = e.target;
  if (clickedBtn.classList.contains('unchecked')) {
    clickedBtn.classList.remove('unchecked');
    clickedBtn.classList.add('checked');
    e.target.completed = true;
  } else if (clickedBtn.classList.contains('checked')) {
    clickedBtn.classList.add('unchecked');
    clickedBtn.classList.remove('checked');
    e.target.completed = false;
  }
}

const categorySelect = document.querySelector('#category-select');
// Adds pre-existing categories to the select input option list
// This will run everytime a new category is added
function createOptionArray() {
  const catArr = [];
  for (const li of document.querySelectorAll('#category-list li')) {
    catArr.push(li.textContent);
  }
  createOptionList(catArr);
  console.log(catArr);
  return catArr;
}

createOptionArray();
// Add functionality to disallow duplicate categories
// Can affect createOptionList() due to the setting of duplicate id's
// Add functionality to remove categories, and should be reflected on select input options
// Adds to #category-list on sidebar, adds new list element to select input
function createCategory() {
  const categoryList = document.querySelector('#category-list');
  const catInput = document.querySelector('#category-input').value;
  const newCat = document.createElement('li');
  newCat.classList.add('category-item');
  newCat.textContent = catInput;
  createOption(catInput);
  categoryList.appendChild(newCat);
  changeDisplay(categoryForm, 'none');
  categoryForm.reset();
}

// Removes all options in category-select
// Refreshes the list whenever a new category is added
function removeOptions(select) {
  let i; const L = select.options.length - 1;
  for (i = L; i >= 1; i--) {
    select.remove(i);
  }
}

function createOptionList(arr) {
  removeOptions(categorySelect);
  for (let i = 0; i < arr.length; i++) {
    const selectOption = document.createElement('option');
    selectOption.setAttribute('value', arr[i]);
    selectOption.textContent = arr[i];
    categorySelect.append(selectOption);
  }
}

// Consider reverting to an array that is read everytime a new category is added
// For ex., it will check through entire array for a new category and only add those that are new
function createOption(input) {
  const selectOption = document.createElement('option');
  selectOption.setAttribute('value', input);
  selectOption.textContent = input;
  categorySelect.append(selectOption);
}

// Create function that querySelectAll '#category-list li' and filters based on (item.category) === e

// Adds the active list title to the header
// and assigns .active to the clicked element
// ISSUE
// Currently allows multiple categories created thru DOM to be active at once
const sidebar = document.querySelector('#sidebar');
const sidebarItems = document.querySelectorAll('#sidebar li');
function addActiveListToHeader() {
  sidebar.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      const activeListHeader = document.querySelector('#active-list-title');
      activeListHeader.textContent = e.target.textContent;
      sidebarItems.forEach(function(item) {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });
}

addActiveListToHeader();

// This function will display the active (clicked) category's tasks
function displayActiveList() {
  let filteredArr = [];
  sidebar.addEventListener('click', function(e) {
    if (e.target.matches('.category-item')) {
      filteredArr = taskArr.filter((item) => item.category === e.target.textContent);
      todoList.innerHTML = '';
      for (const item of filteredArr) {
        createTaskElement();
      }
    }
  });
}

// If a list is clicked, only display that list's objects
// When creating a new task object, check what the current list is and add that list as a property under 'category'
// By default, make the category property blank
// Sort through all objects and only display those with the corresponding category

// Add an X button next to all list items to allow them to be deleted

export {
  createTaskElement,
  completeTask,
  createCategory,
  changeDisplay,
  createOptionArray,
  taskForm,
  categoryForm,
  todoList,
};
