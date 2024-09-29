const todolist = document.querySelector('.todo-list');
const todoField = document.querySelector('#input-field');
const todoButton = document.querySelector('.input-button');

todoButton.addEventListener('click', add);

function add() {
    // Get the value of the input field
    const newTodoText = todoField.value.trim();

    // Check if the input field is not empty
    if (newTodoText !== "") {
        // Create a new list item element
        const newTodoItem = document.createElement('li');

        // Set the text content of the new list item to the input field's value
        newTodoItem.textContent = newTodoText;

        // Add the new list item to the existing to-do list
        todolist.appendChild(newTodoItem);

        // Clear the input field after adding the item
        todoField.value = '';
    } else {
        // If the input field is empty, you can alert the user
        alert('Please enter a task!');
    }
}
