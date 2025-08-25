class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2025 - idade;
  }

  descrever() {
    console.log(`meu nome é ${this.nome} e tenho ${this.idade}`);
  }
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é  mais velha que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velha que ${p1.nome}`);
  } else {
    console.log("tem a mesma idade");
  }
}

const mateus = new Pessoa("Mateus Campo", 20);
const ana = new Pessoa("Ana Clara", 25);

compararPessoas(mateus, ana);
