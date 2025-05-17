function parImpar (n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let res = parImpar(7)
console.log(res)



//Fuçãso 2

function soma (x=0,y=0) {
    return x + y
}                //Parametros
console.log(soma(2,5))




//fução 2 criando uma função dentro da variavel

var teste = function(x) {
    return x * 2
}

console.log(teste(8))



//Função 3

function fatorial(x) {
    let fat = 1
    for (let c = x; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

//função 4

function fatorial2(n) {
    if (n == 1 ) {
        return 1
    } else {
        return n * fatorial2(n-1)
    }
}

console.log(fatorial2(5))