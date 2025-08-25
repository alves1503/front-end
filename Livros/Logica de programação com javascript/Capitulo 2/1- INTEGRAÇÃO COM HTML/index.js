const form = document.querySelector('form');
const res = document.querySelector('h3');

form.addEventListener("submit", (e) => {
  const nome = form.text.value;
  res.innerText = `Seja bem vindo ${nome}`;
  e.preventDefault()
});
