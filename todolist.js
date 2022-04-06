function create() {
    let newElement = document.createElement('h2');
    newElement.textContent = "Todolist";
    document.body.appendChild(newElement);
    newElement.classList.add('h1-js');

}

create();