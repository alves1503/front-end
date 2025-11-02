// 01- Movendo pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 02- Selecionando elementos
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 03- Selecionando elementos (Por ID)
const titulo = document.getElementById("title");
console.log(titulo);

// 04- Selecionando elementos (Por Classe)
const produto = document.getElementsByClassName("product");
console.log(produto);

// 05- Selecionando elementos (Varios elementos)
const listas = document.querySelectorAll("li"); //Seleciona todos
console.log(listas);

const listaSimples = document.querySelector("li"); //Seleciona somente um
console.log(listaSimples);

// 06- Alterando o HTML (InsertBefore)
const p = document.createElement("p");

const header = titulo.parentElement;

header.insertBefore(p, titulo);

// 07- Alterando HTML com appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);


// 08- ReplaceChild
const h2 = document.createElement("h2");
h2.textContent = "Meu novo titulo";

header.replaceChild(h2, titulo);

// 09- Criando nos de textos
const mainContainer = document.querySelector("#main-container");
const myText = document.createTextNode("Agora vamos colocar mais um titulo");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);
console.log(h3);
mainContainer.appendChild(h3);

// 10- Alterando atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");
firstLink.setAttribute("target", "_blank");
console.log(firstLink.getAttribute("href"));

// 11- Altura e largura dos elementos
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

// 12- Posição dos elementos na tela
const product1 = produto[0];
console.log(product1.getBoundingClientRect());


// 13- Estilos 
h2.style.color = 'red'



// 14- Alterando estilos de varios elementos
for (const li of listItens) {
    li.style.backgroundColor = 'red'
}