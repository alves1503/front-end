// 01- Metodos
const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au au");
  },
};

animal.latir();

// 02- Aprofundando em metodos
const pessoa = {
  nome: "Henrique",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.getNome());

pessoa.setNome("Novo nome");
console.log(pessoa.nome);

// 03- Prototypes
const text = "abc";

console.log(Object.getPrototypeOf(text));

// 04- Mais sobre prototypes
const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));

// 05- Classes básicas
const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor alemao";
console.log(pastorAlemao);

// 06- Função como classe
function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");
console.log(bob);

// 07- Funções construtoras

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozy", "Husky");
console.log(husky);

// 08- Metodos na função construtoras

Cachorro.prototype.uivar = function () {
  console.log("Auuuuuuu!");
};

husky.uivar();

// 09- Classes ES6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jef = new CachorroClasse("Jef", "Pintcher");
console.log(jef);

// 10- Mais sobre classes
class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Este caminhao tem ${this.eixos} e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "Azul");
console.log(scania);
scania.descreverCaminhao();

// 11- Substituindo propriedades pelo prototypes
class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const henrique = new Humano("Henrique", 20);
console.log(henrique);

// 12- Symbol com classes
class Aviao {
  constructor(marca, turbina) {
    this.marca = marca;
    this.turbina = turbina;
  }
}

const asas = Symbol();

Aviao.prototype[asas] = 2;

const boing = new Aviao("Boeing", 10);
console.log(boing);
console.log(boing[asas]);

// 13- Getters e Setters
class Posts {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você esta lendo ${this.titulo}`
  }

  set adcionarTags(tags) {
    const tagsArrays = tags.split(", ")
    this.tags = tagsArrays
  }
}

const myPost = new Posts("Algum post", "É um post sobre programação")

console.log(myPost)
console.log(myPost.exibirTitulo)

myPost.adcionarTags = "Html, css, js"
console.log(myPost)


// 14- Heranças
class Mamiferos {
constructor(patas) {
    this.patas = patas
}
}
class Lobo extends Mamiferos {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const blue = new Lobo(4, "Blue")
console.log(blue)


