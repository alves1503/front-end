const valores = [2,3,6,9]

const users = [                         //Objetos
    {name:"Pedro",age:40},
    {name:"Mateus",age:50},
    {name:"Henrique",age:20}
]

const userNames = users.map(user => user.name)
console.log(userNames)


const valoresDobrados = valores.map(valor => valor * 2)


console.log(valoresDobrados)