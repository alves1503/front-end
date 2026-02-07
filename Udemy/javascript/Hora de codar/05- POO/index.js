// 01- Métodos
const animal = {
  name: "BOB",
  latir: function () {
    console.log("Au Au");
  },
};

animal.latir();

// 02- Mais sobre métodos
const pessoa = {
  name: "Henrique",

  getNome: function () {
    return this.name;
  },
};

console.log(pessoa.getNome());

// 03- Prototypes
const text = "asd";
console.log(Object.getPrototypeOf(text));

// 04- Classes básicas
const cachorro = {
  nome: null,
  raca: null,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);

// 05- Funções como classes
function criarCachorr(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorr("Bob", "Vira Lata");
console.log(bob);

// 06- Funções construtoras
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}
const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// 07- Métodos em funções construtoras
Cachorro.prototype.uivar = function () {
  console.log("Auuuu");
};

husky.uivar();

// 08- Classes em JavaScript
class Pessoa {
  constructor(nome, age) {
    this.nome = nome;
    this.age = age;
  }
}

const henrique = new Pessoa("Henrique", 20);
console.log(henrique);

// 09- Mais sobre classes
class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Ese caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "Preto");
console.log(scania.descreverCaminhao());

// 10- Override
class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const marcos = new Humano("Marcos", 30);
console.log(marcos);

// 11- Symbols em classes
class Aviao {
  constructor(marca, turbina) {
    this.marca = marca;
    this.turbina = turbina;
  }
}

const asas = Symbol();
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);

// 12- Getters e Setters
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArrays = tags.split(", ");
    this.tags = tagsArrays;
  }
}

const myPost = new Post("Algum post", "É um post sobre programação");
console.log(myPost);
console.log(myPost.exibirTitulo);
myPost.adicionarTags = "Programação, JavaScript, Java";
console.log(myPost);

// 13- Herança
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");
console.log(shark);


// 14- IntanceOf
console.log(shark instanceof Lobo);

