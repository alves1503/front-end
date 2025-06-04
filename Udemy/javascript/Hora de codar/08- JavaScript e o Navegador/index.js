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
