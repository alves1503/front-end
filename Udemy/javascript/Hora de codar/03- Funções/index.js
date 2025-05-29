// 01- CRINDO UMA FUNÇÃO
function teste() {
    console.log('Teste')
}

teste() // Chama a  função 

//Chama em variavel
const minhaFun = function () {
    console.log("Função em variavel")
}
minhaFun()

// Criando função com parametro
function comParametro(txt) {
    console.log(`Impreimindo : ${txt}`)
}
comParametro("Imprimindo algo")


// 02- RETORNNDO VALORES DA FUNÇÃO
const a = 2
const b = 20
const c = 10
const d = 25

function somaValores(a, b) {
    return a + b
}

const res = somaValores(a, b)
console.log(res)



// 03- ESCOPO DA FUNÇÃO
let y = 20

function testandoEscopo() {
    let y = 30
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo()

console.log(`Y fora da função é: ${y}`)


// 04- ESCOPO ALINHADO
let m = 10

function escopoAlinhado() {
    let m = 20

    if (true) {
        let m = 30
        if (true) {
            let m = 40
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAlinhado()
console.log(m)


// 05- ARROW FUNCTION
const testArrow = () => {
    console.log('Está é uma arrow function')
}

testArrow()

const parImpar = (n) => {
    if (n % 2 === 0) {
        console.log('Par')
        return
    }
    console.log('Impar')
}

parImpar (5)
parImpar (10)
