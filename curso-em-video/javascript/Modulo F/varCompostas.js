//Aqui vai meu array
let num = [7, 2, 4, 6]

//Vai criar o valor 1
num.push(1)
//coloca os arrays em ordens
num.sort()


//Imprimi a mensagem
console.log(num)
console.log(`O vetor tem tantos ${num.length} posiçoes`)
console.log(num[2])
console.log(`O primeiro valor do vetor é: ${num[0]}`)

// Estura para com array
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


//Simplfica o processo anterio
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//VAi procurar o valor dentro dos parentes nos array
console.log(`O valor "7" está na posição: ${num.indexOf(7)}`)