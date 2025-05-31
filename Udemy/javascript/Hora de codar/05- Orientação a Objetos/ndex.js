/* // 01- METODOS
const animal = {
    nome: 'Bob',

    latir: function () {
        console.log('Au Au Au')
    }
}

console.log(animal.nome)

animal.latir()

// 02- APROFUNDANDO METODOS
const pessoa = {
    nome: 'Henrique',

    getNome: function () {
        return this.nome
    },

    setNome: function (novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.nome)

console.log(pessoa.getNome())


pessoa.setNome('Joaquim')

console.log(pessoa.getNome())


// 03- PROTOTYPES
const text = 'Add'
console.log(Object.getPrototypeOf(text))


const boll = true
console.log(Object.getPrototypeOf(boll))


// 04- MAIS SOBRE PROTOTYPES
const myObjrct = {
    a: 'b',
}

console.log(Object.getPrototypeOf(myObjrct))

console.log
    (Object.getPrototypeOf(myObjrct) === Object.prototype)

const mySecondObject = Object.create(myObjrct)

console.log(mySecondObject)
console.log(mySecondObject.a)

// 05- CLASSES BASICAS 
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = 'Pastor Alemão'

console.log(pastorAlemao)
console.log(pastorAlemao.patas)

// 06- FUNÇÃO COMO CLASSES - FUNÇÃO CONSTRUTORA
function criarCachorro(nome, raca) {

    const dog = Object.create({})

    dog.nome = nome
    dog.raca = raca


    return dog

}


const bob = criarCachorro('Bob', 'Vira lata')
const marlom = criarCachorro('Marlom', 'Buldog')

console.log(bob)
console.log(marlom)


// 07- FUNÇÕES COMO CLASSES 
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const pintcher = new Cachorro('Micky', 'Pintcher')

console.log(pintcher)


// 08- METODOS NA FUNÇÃO CONSTRUTORA
Cachorro.prototype.uivar = function () {
    console.log('AUUUUUUUUUUUUUU!')
}

pintcher.uivar()


// 09- CLASSES ES6
class ChachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new ChachorroClasse('Jeff', 'Labrador')
console.log(jeff)


// 10- MAIS SOBRE  CLASSES
class Caminhao {
    constructor (eixo, cor) {
        this.eixo = eixo
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixo} eixos e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, 'Azul')
console.log(scania)
scania.descreverCaminhao()



// 11- OVERRIDE
    class Humano {
        constructor (nome,idade) {
            this.nome = nome
            this.idade = idade
        }
    }

    const henrique = new Humano('Henrique', 20)
    console.log(henrique)

    Humano.prototype.idade = 'Não definida'

    console.log(henrique.idade)

    console.log(Humano.prototype.idade) */

 // 12- SYMBOL
class Aviao {
    constructor(marcas, turbinas) {
        this.marcas = marcas
        this.turbinas = turbinas
    }
}

const asas = Symbol()

Aviao.prototype[asas] = 2

const boeing = new Aviao('Boeing', 10)
console.log(boeing)

console.log(boeing[asas])


// 13- GETTER E SETTER   
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Você está lendo ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split (", ")
        this.tags =  tagsArray
    }
}

const myPost = new Post('Algum post', 'É um post sobre programação')

console.log(myPost)
console.log(myPost.exibirTitulo)
myPost.adicionarTags = 'programacao, javascript, post'

console.log(myPost)



// 14- HERANÇA 
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas,nome) {
        super(patas,patas)
        this.nome = nome
    }
}

const shark = new Lobo (4, 'Shark')
console.log(shark)