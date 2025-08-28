const form = document.querySelector("form");
const res = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  const valorbuffet = Number(form.buffet.value);
  const consumoGrama = Number(form.cons.value);

  const consumoEmQuilo = consumoGrama / 1000;
  const valorGasto = consumoEmQuilo * valorbuffet;

  res.innerText = `Valor a pagar R$ ${valorGasto}`;


});
