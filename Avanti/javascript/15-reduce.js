const valores = [2,3,6,9]

const products = [
    {name:"Celular",price:500},
    {name:"Tv",price:600},
    {name:"Notebook",price:100}
]

const somaTotalDosValores = valores.reduce((acc,val) => acc + val,0)

const somaTotalDosProdutos = products.reduce((acc,val) => acc + val.price,0)

console.log(somaTotalDosProdutos)
console.log(somaTotalDosValores)