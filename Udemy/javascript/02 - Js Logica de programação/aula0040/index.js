const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]


//Estrutura continue
for (let num1 of num) {
    if (num1 === 2) {
        continue
    }
    
    console.log(num1)

    if (num === 7) {
        break
    }
}
