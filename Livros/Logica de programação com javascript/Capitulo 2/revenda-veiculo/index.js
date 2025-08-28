const form = document.querySelector("form");
const promocaoRes = document.querySelector(".text1");
const entradaRes = document.querySelector(".text2");
const parcelaRes = document.querySelector(".text3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tipoVeiculo = form.vei.value;
  const precoVeiculo = Number(form.preco.value);

  const valorEntrada = precoVeiculo * 0.5;
  const valorParcela = (precoVeiculo - valorEntrada) / 12;

  promocaoRes.innerText = `Promoção: ${tipoVeiculo}`;
  entradaRes.innerText = `Entrada de R$ ${valorEntrada}`;
  parcelaRes.innerText = `+12 de R$ ${valorParcela}`;
}); 
