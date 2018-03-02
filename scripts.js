let todoList = document.getElementById('todo-list');
let inputField = document.getElementsByTagName('input')[0];
let theButton = document.getElementById('add_todo');
let todoArray = [];

// wow fancy undo features
let undoBlock = document.getElementById('undo-block');
let undoText = document.getElementById('undo-text');
let savedTask;

function addToDo() {
	// Get user input and push to internal data array
	let newToDo = inputField.value;
	todoArray.push(newToDo);

	// Initialize new li and add data-id
	let newLi = `<li data-id="${todoArray.length}">
	<input type="checkbox" class="done">

	<div class="task-wrapper">
	<span class="task-span" id="task-${todoArray.length}">${newToDo}</span>
	</div>

	<div class="delete">X</div>
	</li>`;

	// Append Li to ToDo list
	todoList.innerHTML += newLi;

	// Clear user input field
	inputField.value = '';
}

function editTask(el) {
	let newInput = `<input class="task-edit" type="textarea" id=${el.id} value="${
		el.textContent
	}">`;
	el.parentNode.innerHTML = newInput;
}

function commitEdit(el) {
	let newSpan = `<span class="task-span" id=${el.id}>${el.value}</span>`;
	el.parentNode.innerHTML = newSpan;
}

// Not sure why this is needed
function markDone(el) {
	let taskSpan = el.parentElement.querySelector('span');
	if (taskSpan.className === 'task-done') {
		taskSpan.className = 'task-span';
	} else {
		taskSpan.className = 'task-done';
	}
}
// classifies if task is done.



function deleteTask(el) {
	el.parentNode.remove();
}


// Ian added this fancy Undo feature
function enableUndo(el) {
	savedTask = el.parentNode;
	let savedText = savedTask.querySelector('span').textContent;
	undoBlock.style.opacity = 1;
	undoText.textContent = `You deleted '${savedText}'`;
}

function restoreTask() {
	todoList.appendChild(savedTask);
	undoBlock.style.opacity = 0;
}

todoList.addEventListener('dblclick', ev => {
	if (ev.target.className == 'task-span') {
		editTask(ev.target);
	}
});

// Add event listeners
theButton.addEventListener('click', () => {
	if (inputField.value) {
		addToDo();
	}
});

todoList.addEventListener('click', ev => {
	if (ev.target.className === 'done') {
		markDone(ev.target);
	} else if (ev.target.className === 'delete') {
		enableUndo(ev.target);
		deleteTask(ev.target);
	}
});

document.addEventListener('keypress', ev => {
	if (
		ev.target.className === 'task-edit' &&
		(ev.keycode === 13 || ev.which === 13)
	) {
		commitEdit(ev.target);
	} else if (
		(ev.keycode === 13 || ev.which === 13) &&
		inputField.value &&
		ev.target === inputField
	) {
		addToDo();
	}
});
