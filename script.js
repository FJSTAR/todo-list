let writeTodo = document.querySelector('.writeTodo');

document.querySelector('.addTodo').addEventListener('click', newElement);

// Create a new list item when clicking on the "Add" button
function newElement() {
    const todoList = document.getElementById('todo-list');
    const todoDiv = document.createElement('div');
    todoDiv.className = 'input-group input-group-lg mb-3 todo';
    
    todoDiv.innerHTML = `
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="${writeTodo.value}" disabled>
        <button class="btn btn-success done">
            <i class="fa-solid fa-check"></i>
        </button>
        <button class="btn btn-primary edit">
            <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="btn btn-danger delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;
    
    todoList.appendChild(todoDiv);

    // Attach event listeners for the newly created buttons
    const doneButton = todoDiv.querySelector('.done');
    const editButton = todoDiv.querySelector('.edit');
    const deleteButton = todoDiv.querySelector('.delete');
    const markCompleted = document.querySelector('#mark-completed');
    const deleteAll = document.querySelector('#delete-all');

    doneButton.addEventListener('click', function() {
        const input = todoDiv.querySelector('input');
        input.disabled = true; // Disable input after marking as completed
        input.classList.toggle('done');
    });

    editButton.addEventListener('click', function() {
        const input = todoDiv.querySelector('input');
        input.toggleAttribute('disabled');
        if (!input.disabled) {
            input.select();
            input.classList.remove('done');
        }else {
            input.setSelectionRange(0, 0); // Reset cursor position to the start of the input field
            input.blur(); // Remove focus from the input field when editing is finished
        }
    });

    deleteButton.addEventListener('click', function() {
        todoList.removeChild(todoDiv); // Remove the item from the list
    });

    markCompleted.addEventListener('click', function() {
        const todoList = document.getElementById('todo-list');
        const todoItems = todoList.querySelectorAll('.todo');

        todoItems.forEach(item => {
            const doneButton = item.querySelector('.done');
            const input = item.querySelector('input');
            input.disabled = true;
        });
        doneButton.click();
    });

    deleteAll.addEventListener('click', function() {
        const todoList = document.getElementById('todo-list');
        const todoItems = todoList.querySelectorAll('.todo');
        
        todoItems.forEach(item => {
            todoList.removeChild(item); // Remove all items from the list
        });
    })
}

// theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
document.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
