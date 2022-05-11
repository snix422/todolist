(function() {
    let newElement = document.createElement('h2');
    newElement.textContent = "Todolist";
    document.body.prepend(newElement);
})();

let array = [];

const AddtoArray = function(nazwa) {
    array.unshift(nazwa);
}

const DeletefromArray = function(number) {
    array.splice(number, 1);
}