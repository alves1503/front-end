/* 💡 Exercício Proposto

Crie um programa em JavaScript puro que faça o seguinte:

Tenha um array de objetos JSON representando livros.
Cada livro deve ter: titulo, autor, ano e disponivel (boolean).

Crie 3 funções:

listarLivros() → mostra todos os livros.

buscarPorAutor(autor) → retorna os livros de um autor específico.

emprestarLivro(titulo) → muda o campo disponivel para false de um livro pelo título.

Mostre no console.log os resultados de cada função. */

let livros = [
  {
    nome: "Estudando algoritmos",
    autor: "Autor 1",
    ano: 2022,
    disponivel: true,
  },
  {
    nome: "Estudando algoritmos 1",
    autor: "Maria",
    ano: 2024,
    dispoonivel: false,
  },
  {
    nome: "Estudando algoritmos 2",
    autor: "Autor 3",
    ano: 2025,
    dispoonivel: true,
  },
];

for (let index in livros) {
    console.log

}

//Busca por autor
function buscarPorAutor(autor) {
    return  livros.filter(livro => livro.autor >= autor)
}

console.log(buscarPorAutor('Maria'))
