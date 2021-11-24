const input = document.querySelector(".input-box")
const output = document.querySelector(".task-additions")
const button = document.getElementById("btn-input")
//const deleteTask = document.querySelector(".btn-delete")
const reset = document.querySelector(".btn-reset")
//const addTask = document.querySelector("")

button.addEventListener("click", () => {
  const task = input.value
  return output.innerHTML += `<div class="added-task"><input type="checkbox" class="checkbox"><h4 class="new-tasks">${task}</h4><button><i class="fas fa-pencil-alt btn-delete"></i></button></div>`;
  })



reset.addEventListener("click", () => {
  input.value= " "
  output.innerHTML = " "
})
  
