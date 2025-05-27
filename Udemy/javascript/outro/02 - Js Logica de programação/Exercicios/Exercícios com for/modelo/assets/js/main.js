const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];
//Le o container HTML
const container = document.querySelector('.container');
//Cria um novo elemento em Html
const div = document.createElement('div');


//REpetição 
for (let i = 0; i < elementos.length; i++) { // Vai percorrer  todo o array
    let { tag, texto } = elementos[i]; // faz a desestrututação
    let tagCriada = document.createElement(tag); //Cria o elemento
    tagCriada.innerText = texto;// Cria o texto
    div.appendChild(tagCriada); //Cria a div
}

container.appendChild(div) //Cria todo a Div container