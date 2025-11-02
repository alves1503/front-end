// 01- Criando evento
const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("O botão foi clicado com sucesso");
});

// 02- Removendo eventos
const secondBtn = document.querySelector("#btn");
const removerFunction = document.querySelector("#other-btn");

function mostrar() {
  alert("Evento adicionado");
}

secondBtn.addEventListener("click", mostrar);

removerFunction.addEventListener("click", () => {
  secondBtn.removeEventListener("click", mostrar);
  alert("Evento de mostrar removido");
});

// 03- Objeto do evento
button.addEventListener("click", (e) => {
  console.log(e);
});

// 04- Propragando eventos
const containerBtn = document.querySelector("#btn-container");
const divBtn = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

divBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// 05- Removendo evento padrao
const a = document.querySelector("a");
a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não alterou nada");
});

// 06- Eventos de teclas
/* document.addEventListener("keyup", (e) => {
console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
console.log(`Apertou a tecla ${e.key}`)
}) */

// 07- Outros eventos no mouse
const mouse = document.querySelector("#mouse");
mouse.addEventListener("mousedown", () => {
  console.log("Pressionou o botão");
});

mouse.addEventListener("mouseup", () => {
  console.log("Soltou o botão");
});

mouse.addEventListener("dblclick", () => {
  console.log("Click duplo");
});

// 08- Movimento do mouse
/* document.addEventListener("mousemove", (e) => {
  console.log(`No eixo X: ${e.x}`);
  console.log(`No eixo Y: ${e.y}`);
});
 */

// 09- Eventos por Scroll
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    console.log("Passamos de 200 px");
  }
});

// 10- Eventos de foco
const email = document.querySelector("#my-email");
email.addEventListener("focus", (e) => {
  console.log("Entrou no input");
});

email.addEventListener("blur", (e) => {
  console.log("Saiu no input");
});

// 11- Evento de carregamento de paginas
window.addEventListener("load", () => {
  console.log("A pagina carregou");
});

/* window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Teste";
});
 */

// 12- Debounce
const debounce = (f, delay) => {
  let timeOut;

  return (...arguments) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando a cada 400ms");
  })
);
