const form = document.querySelector("form");
const resNomeFilme = document.querySelector("h3");
const resDuracao = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  const nomeDoFilme = form.filme.value;
  const duracaoMinutosFilme = Number(form.min.value);

  const horas = Math.floor(duracaoMinutosFilme / 60);
  const minutos = duracaoMinutosFilme % 60;

  e.preventDefault();
  resNomeFilme.innerText = `Filme: ${nomeDoFilme}`;
  resDuracao.innerText = `${horas} Hora(s) e ${minutos}(min)`;

    
});
