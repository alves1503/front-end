const valores = [2,3,6,9]

const users = [
    {name:"Pedro",age:40},
    {name:"Mateus",age:50},
    {name:"Henrique",age:20}
]

const numerosMaioresQueCinco =  valores.filter(num => num >= 5)

const numerosPares = valores.filter(num => num % 2 === 0)

console.log(numerosPares)
console.log(numerosMaioresQueCinco)