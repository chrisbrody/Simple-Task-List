var addTaskBtn = document.getElementById('addTaskBtn')

var displayList = document.getElementById('listItems')

function addTask(form) {
	var formVal = this.form.elements.usertask

	console.log(formVal.value)

	createNewTaskElements(formVal.value)

	formVal.value = ''
	formVal.focus()

}

function createNewTaskElements(task) {

	var listItem = document.createElement('li')

	listItem.innerText = task

	displayList.appendChild(listItem)

}


addTaskBtn.addEventListener('click', addTask, false)






