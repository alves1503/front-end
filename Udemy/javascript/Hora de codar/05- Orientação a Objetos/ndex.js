// 01- METODOS
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