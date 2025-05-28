// 01- CRINDO UMA FUNÇÃO
function teste () {
    console.log('Teste')
}

teste() // Chama a  função 

//Chama em variavel
const minhaFun = function() {
    console.log("Função em variavel")
}
minhaFun()

// Criando função com parametro
function comParametro (txt) {
    console.log(`Impreimindo : ${txt}`)
}
comParametro("Imprimindo algo")


// 02- RETORNNDO VALORES DA FUNÇÃO
const a = 2
const b = 20
const c = 10
const d = 25

function somaValores (a,b) {
    return a + b
}

const res = somaValores(a,b)
console.log(res)