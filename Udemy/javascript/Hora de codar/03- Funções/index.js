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