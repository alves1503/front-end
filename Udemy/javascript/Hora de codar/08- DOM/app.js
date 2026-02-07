// 01- Movendo pelo DOM
console.log(document.body);
console.log(document.childNodes[1]);

// 02- Selecionando elementos por tag
//const h2 = document.getElementsByTagName("h2");
//console.log(h2);

// 03- Selecionando por ID
const titulo = document.getElementById("title");
console.log(titulo);

// 04- Selecionando por classe
const classe = document.getElementsByClassName("product");
console.log(classe);

// 04- Selecionando por query selector
const main = document.querySelector("#main-container");
console.log(main);

// 05- Metodo insertBefore
const p = document.createElement("p");
const header = titulo.parentElement;

header.insertBefore(p, titulo);

// 06- Metodo appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");

navLinks.appendChild(li);

// 07- Metodo replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo titulo";

header.replaceChild(h2, titulo);

// 08- Criando nós de textos
const myText = document.createTextNode("Agora vamos criar mais um titulo");

const h3 = document.createElement("h3");
h3.appendChild(myText);

main.appendChild(h3);

// 09- Alterando atributos
const firstLink = navLinks.querySelector('a')

firstLink.setAttribute("href", "https->teste")

// 10- Altura e largura dos itens
const footer = document.querySelector("footer")

console.log(footer.offsetHeight);
console.log(footer.offsetWidth);



