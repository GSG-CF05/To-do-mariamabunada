const inputBox=document.querySelector(".inputfield input")
const addBtn=document.querySelector(".inputfield button")
const listOfTasks=document.querySelector(".todolist")
showTasks()
// add button
addBtn.onclick=()=>{
    let taskText=inputBox.value
    let getLocalStorage=localStorage.getItem("new task")
    if(getLocalStorage==null){ //if local storage is null
        arrOfTasks=[] // create empty array
    }
    else{
        arrOfTasks=JSON.parse(getLocalStorage) // transforming json string into a JS object
    }
    arrOfTasks.push(taskText) // pushing the tasks to the arr of tasks
    localStorage.setItem("new task",JSON.stringify(arrOfTasks)) // transforming JS object to Json string
    showTasks() // calling the function
}

function showTasks() {
    let getLocalStorage=localStorage.getItem("new task")
    if(getLocalStorage==null){ //if local storage is null
        arrOfTasks=[] // create empty array
    }
    else{
        arrOfTasks=JSON.parse(getLocalStorage) 
    }
    let newTask=""
    arrOfTasks.forEach(element => {
        newTask+=`<li>${element}<span><i class="fas fa-regular fa-pen"></i><i class="fas fa-trash"></i></span></li>`
    });
    listOfTasks.innerHTML=newTask // add new task inside ul tasks
    inputBox.value=""//emptify the input box after adding the task
}

