/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {todoFactory, createNewTaskBtn} from './index.js';

const todoList = document.querySelector('#todo-list');
const taskForm = document.querySelector('#task-form');
const categoryForm = document.querySelector('#category-form');

function changeDisplay(element, type) {
  element.style.display = type;
}

function getFormData(form) {
  const title = document.querySelector('#title').value;
  const category = document.querySelector('#category-select').value;
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
  changeDisplay(taskForm, 'none');
  todoList.appendChild(li);
  taskForm.reset();
  changeDisplay(createNewTaskBtn, 'block');
}

function completeTask(e) {
  // Add a class that styles the font to be greyed out
  // Send to bottom of list
  const clickedBtn = e.target;
  if (clickedBtn.classList.contains('unchecked')) {
    clickedBtn.classList.remove('unchecked');
    clickedBtn.classList.add('checked');
    // this.checklist = true;
  } else if (clickedBtn.classList.contains('checked')) {
    clickedBtn.classList.add('unchecked');
    clickedBtn.classList.remove('checked');
    // this.checklist = false;
  }
}

const categorySelect = document.querySelector('#category-select');
// Adds pre-existing categories to the select input
function createOptionArray() {
  const arr = [];
  for (const li of document.querySelectorAll('#category-list li')) {
    arr.push(li.textContent);
  }
  createOptionList(arr);
  return arr;
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
  newCat.textContent = catInput;
  // const catArr = createOptionArray();
  // newCatArr.push(catInput); // Adds to an array that is used for dropdown menu in taskForm
  // console.log(newCatArr);
  createOption(catInput);
  categoryList.appendChild(newCat);
  changeDisplay(categoryForm, 'none');
  categoryForm.reset();
}

function createOptionList(arr) {
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
function addActiveListToHeader() {
  const sidebar = document.querySelector('#sidebar');
  sidebar.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      const activeListHeader = document.querySelector('#active-list-title');
      activeListHeader.textContent = e.target.textContent;
      const listItems = document.querySelectorAll('#sidebar li');
      listItems.forEach(function(item) {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });
}

addActiveListToHeader();

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
  taskForm,
  categoryForm,
  // catInput,
  todoList,
};
