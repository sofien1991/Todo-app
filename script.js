const input = document.querySelector('input');
let addBtn = document.querySelector('#add');
const clearBtn = document.querySelector('#clear');
const todoList = document.querySelector('.todolist')


const addTodo = () => {
	if (input.value.length === 0) {
		return false
	}else 
	{const todoDiv = document.createElement('div')
	    const newTodo = document.createElement('li');
	    todoDiv.classList.add('todo-div')
		todoList.appendChild(todoDiv);
		todoDiv.appendChild(newTodo);
		todoDiv.innerText = input.value;
		let deleteBtn = document.createElement('button');
		deleteBtn.classList.add('added-btn')
		deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
		todoDiv.appendChild(deleteBtn);
		const checkBtn = document.createElement('button');
		checkBtn.classList.add('check-btn')
		checkBtn.innerHTML= '<i class="fa fa-check"></i>';
		todoDiv.appendChild(checkBtn);
		
	    input.value = '';
	    deleteBtn.addEventListener('click', deleteHandle);
	    checkBtn.addEventListener('click', checkHandle);}
}


const deleteHandle = (e) =>  {
	 let item = e.target;
	 let todo = item.parentElement;
	 todo.remove();
}

const checkHandle = (e) => {
	const todo2 = e.target.parentElement
	todo2.classList.toggle('line') 
}






