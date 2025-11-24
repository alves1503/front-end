const form = document.querySelector("form");
const nomeRes = document.querySelector("h4");
const mensagemRes = document.querySelector(".res");

function adicionarMensagem(nome, mensagem) {
  nomeRes.innerText = nome;
  nomeRes.style.color = "blue";
  mensagemRes.innerText = mensagem;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome.trim() === "" || mensagem.trim() === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  adicionarMensagem(nome, mensagem);
  alert(`Obrigado, ${nome}! Sua mensagem foi: ${mensagem}`);
  form.reset();
});
