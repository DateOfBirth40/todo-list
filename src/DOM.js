/* eslint-disable require-jsdoc */

const todoList = document.querySelector('#todo-list');
const addTask = document.createElement('button');
addTask.textContent = 'Add';

function createTaskObject() {
  // Create an object using whatever is inputted
  const inputDiv = document.createElement('div');
  const titleInput = document.createElement('input');
  const notesInput = document.createElement('input'); // Not necessary
  const dateInput = document.createElement('input'); // Not necessary
  const timeInput = document.createElement('input'); // Not necessary
  const buttonDiv = document.createElement('div');
  const cancelTask = document.createElement('button');
  buttonDiv.classList.add('button-div');
  cancelTask.textContent = 'Cancel';
  inputDiv.appendChild(titleInput);
  inputDiv.appendChild(notesInput);
  inputDiv.appendChild(dateInput);
  inputDiv.appendChild(timeInput);
  buttonDiv.appendChild(addTask);
  buttonDiv.appendChild(cancelTask);
  inputDiv.appendChild(buttonDiv);
  todoList.appendChild(inputDiv);
}

function createTaskElement() {
  const li = document.createElement('li');
  // Add textContent
  const check = document.createElement('div');
  check.classList.add('check-btn', 'unchecked');
  li.appendChild(check);
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
  createTaskObject,
  createTaskElement,
  completeTask,
  todoList,
  addTask,
};
