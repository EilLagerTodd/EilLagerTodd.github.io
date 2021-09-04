const todoForm = document.getElementById("todo-form")
const todoList = document.getElementById("todo-list")

const todoInput = todoForm.querySelector("input")

const ToDoKey = "todos"

let toDos = []


function saveToDo() {
    localStorage.setItem(ToDoKey, JSON.stringify(toDos))
}

function delToDo(event) {

    const parent = event.target.parentElement;
    parent.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(parent.id))
    saveToDo()

}

function paintodo(newToDo) {
    const item = document.createElement("li")
    item.id = newToDo.id
    const span = document.createElement("span")
    span.innerText = newToDo.Text
    const del = document.createElement("button")
    del.innerText = "✔"

    del.addEventListener("click", delToDo)

    item.appendChild(span)
    item.appendChild(del)

    todoList.appendChild(item)
}

function todosubmit(event) {
    event.preventDefault();
    const newToDo = todoInput.value

    const newToDoObj = {
        Text:newToDo,
        id:Date.now()
    }

    toDos.push(newToDoObj)
    paintodo(newToDoObj) 
    todoInput.value = ""
    saveToDo()
}

todoForm.addEventListener("submit", todosubmit)

const getToDos = localStorage.getItem(ToDoKey)

if(getToDos !== null ) {
    const parasedToDos = JSON.parse(getToDos)
    toDos = parasedToDos;
    parasedToDos.forEach(paintodo)
}