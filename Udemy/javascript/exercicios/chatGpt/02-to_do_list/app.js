const form = document.querySelector("form");
const res = document.querySelector(".container-list");

// Função de adicionar um item na lista
function addTask(task) {
  const list = document.createElement("ul");
  const item = document.createElement("li");
  item.textContent = task;
  list.appendChild(item);
  res.appendChild(list);
  localStorage.setItem("myList", list)
}

// Remover tarefa



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskAdd = form.task.value;
  if (taskAdd === "") {
    alert("O campo não pode ser vazio!");
  } else {
    addTask(taskAdd);
  }
});

localStorage.setItem("nome", "Henrique");
console.log(localStorage.getItem("nome")); 