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