const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Alves',
    idade: '20',
    endereco: {
        rua: 'Vicente dias barbose',
        numero: 1000
    }
};  

const { nome: teste, sobrenome, endereco: {rua, numero} } = pessoa
console.log(teste, sobrenome, rua, numero)