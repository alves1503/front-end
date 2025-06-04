// 02- SELECIONANDO POR TAGS'
const listItem = document.getElementsByTagName('li')
console.log(listItem)


// 03- SELECIONANDO ELEMENTOS POR ID
const titulo = document.getElementById('title')
console.log(titulo)


// 04- SELECIONANDO ELEMENTOS POR CLASSES
const navegacao = document.getElementsByClassName('nav')
console.log(navegacao)


// 05- SELECIONANDO ELEMENTOS POR QUERY SELECTOR
const navegacao2 = document.querySelectorAll('.nav')
console.log(navegacao2)


// 06- INSERTBEFORE

// A primeira linha cria um novo elemento <p> (parágrafo) na página
const p = document.createElement('p')

// Aqui, estamos pegando o **elemento pai** do título. O "elemento pai" é o "responsável" pelo título, como uma caixa que contém o título.
const header = titulo.parentElement

// Agora, colocamos o novo parágrafo <p> dentro do "header" (caixa) antes do título "titulo".
header.insertBefore(p, titulo)


// 07- APPENDCHILD
const navLinks = document.querySelector('nav')

const li = document.createElement('li')

navLinks.appendChild(li)

// 08- REPLACECHILD
const h2 = document.createElement('h2')

h2.textContent = 'Meu novo texto!'
header.replaceChild(h2, titulo)


// 09- CREATETEXTNODE
// Criamos um nó de texto
const myText = document.createTextNode('Agora vamos colocar mais um título');

// Criamos um novo elemento <h3>
const h3 = document.createElement('h3');

// Colocamos o nó de texto dentro do <h3>
h3.appendChild(myText);

// Exibimos o <h3> no console para ver como ficou
console.log(h3);

// Finalmente, adicionamos o <h3> ao elemento <main>
const main = document.querySelector('main');
main.appendChild(h3);
