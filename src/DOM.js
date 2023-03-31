/* eslint-disable require-jsdoc */

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
  console.log(title);
  // createTaskElement(title);
}

function createTaskElement() {
  const li = document.createElement('li');
  // Add textContent
  getFormData(this.taskForm);
  // li.textContent = title;
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
  createTaskElement,
  getFormData,
  completeTask,
  displayForm,
  taskForm,
  todoList,
};
