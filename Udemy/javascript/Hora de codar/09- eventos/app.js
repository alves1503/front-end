// 01- Adicionando eventos
const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  console.log("Clicou aqui");
});

// 02- Removendo eventos
h1.addEventListener("click", () => {
  console.log("Clicou aqui e removeu evento");
  h1.removeEventListener();
});
