/* // 1- STRICT

'use strict'

const opa = 'teste'

// 2- COONSOLE.LOG

let a = 1
let b = 2

if (a == 1) {
    a = b + 2
}

console.log(a)

for (let i = 0; i < b; i++) {
    a = a + 2
    console.log(a)
}

if (a > 5) {
    a = 25
}

console.log(a)

// 3- DEBUGGER
let c = 1
let d = 2

if (c == 1) {
    c = d + 2
}

debugger;

for (let i = 0; i < d; i++) {
    c = c + 2
} */


/* // 4- TRATAMENTO DE DADOS
function dados(n) {

    const result = Number(n)
    if (Number.isNaN(result)) {
        console.log('Valor incorreto!')
        return
    }
    console.log('Valor correto')
    return result
}

dados(5)
dados('50')
dados({})
dados('Teste')

// 5- EXCEPTIONS

let x = 10

if (x != 11) {
    throw new Error("O valor de x não pode ser diferente de 11");
} */

// 6- TRY CATCH

try {
    const soma = x + y
} catch(error) {
    console.log(`Erro no programa: ${error}`)
}

// 7 -FINALY
try {
    const value = dados('Asd') 

    if (!value) {
        throw new Error('Valores invalidos')
    }
} catch (error) {
    console.log(`Opa, aconteceu um problema: ${error}`)
} finally {
    console.log('O codigo foi executado')
}