/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {todoFactory, createNewTaskBtn} from './index.js';

const todoList = document.querySelector('#todo-list');
const taskForm = document.querySelector('#task-form');
const categoryForm = document.querySelector('#category-form');

function displayBlock(element) {
  element.style.display = 'block';
}

function displayGrid(element) {
  element.style.display = 'grid';
}

function hideElement(element) {
  element.style.display = 'none';
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
  hideElement(taskForm);
  todoList.appendChild(li);
  taskForm.reset();
  displayBlock(createNewTaskBtn);
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

const catArr = [];
for (const li of document.querySelectorAll('#category-list li')) {
  catArr.push(li.textContent);
}

// Add functionality to disallow duplicate categories
// Can affect createOptionList() due to the setting of duplicate id's
function createCategory() {
  const categoryList = document.querySelector('#category-list');
  const catInput = document.querySelector('#category').value;
  const newCat = document.createElement('li');
  newCat.textContent = catInput;
  catArr.push(catInput); // Adds to an array that is used for dropdown menu in taskForm
  categoryList.appendChild(newCat);
  hideElement(categoryForm);
  categoryForm.reset();
}

const categorySelect = document.querySelector('#category-select');
function createOptionList(arr) {
  for (let i = 0; i < arr.length; i++) {
    const selectOption = document.createElement('option');
    selectOption.setAttribute('value', arr[i]);
    selectOption.textContent = arr[i];
    categorySelect.append(selectOption);
  }
}

createOptionList(catArr);

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
  displayBlock,
  displayGrid,
  hideElement,
  taskForm,
  categoryForm,
  // catInput,
  todoList,
};
