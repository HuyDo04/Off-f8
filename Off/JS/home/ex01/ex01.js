const todoForm = document.getElementById("todoForm");  
const titleElement = document.getElementById("title");  
const descElement = document.getElementById("desc");  
const tbody = document.getElementById("tbody");  

let todoSaved = JSON.parse(localStorage.getItem("todos") || "[]");  
let currentEditIndex = null;

todoForm.addEventListener("submit", function (event) {  
    event.preventDefault();  
    
    if (currentEditIndex !== null) {  
        todoSaved[currentEditIndex] = {  
            title: titleElement.value,  
            desc: descElement.value,  
            completed: false,
        };  
        currentEditIndex = null;
    } else {  

        const todo = {  
            title: titleElement.value,  
            desc: descElement.value,  
            completed: false,
        };  
        todoSaved.push(todo);  
    }  
    
    localStorage.setItem("todos", JSON.stringify(todoSaved));  
    handleView(todoSaved);  
    
    // Clear
    titleElement.value = '';  
    descElement.value = '';  
});  


function handleView(todos) {  
    tbody.innerText = "";
    todos.forEach((element, index) => {  
        let trElement = document.createElement("tr");  
        trElement.innerHTML = `   
            <td${element.completed ? ' style="text-decoration: line-through;"' : ''}>${element.title}</td>  
            <td>${element.desc }</td>  
            <td>  
                <button class="btn btn-warning" onclick="prepareForUpdate(${index})">Update</button>  
                <button class="btn btn-danger" onclick="deleteTodo(${index})">Delete</button>  
            </td>  
            <td>
             <button class="btn btn-success" onclick="toggleCompletion(${index})">${element.completed ? 'Undo' : 'Complete'}</button>  
            </td>
        `;  
        tbody.appendChild(trElement);  
    });  
}  


function toggleCompletion(index) {  
    todoSaved[index].completed = !todoSaved[index].completed;
    localStorage.setItem("todos", JSON.stringify(todoSaved));
    handleView(todoSaved);  
}  

function prepareForUpdate(index) {  
    const todo = todoSaved[index];  
    titleElement.value = todo.title;  
    descElement.value = todo.desc;  
    currentEditIndex = index; 
}  

function deleteTodo(index) {  
    todoSaved.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todoSaved)); 
    handleView(todoSaved);  
}  

handleView(todoSaved);