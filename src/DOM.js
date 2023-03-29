/* eslint-disable require-jsdoc */

const todoList = document.querySelector('#todo-list');

function createTodoElement() {
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
  createTodoElement,
  completeTask,
  todoList,
};
