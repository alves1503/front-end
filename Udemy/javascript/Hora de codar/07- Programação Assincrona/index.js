/* // 1- SETTIMEOUT
console.log('Ainda não foi executada');

setTimeout(function(){

    console.log('Executado!')

}, 2000)



console.log('Ainda não foi executada 2')

// 2- SETINTERVAL
console.log('Ainda não foi executada')


setInterval(function() {
    console.log('Intervalo assincrono')
},2000)



console.log('Ainda não foi executada 2') */

// 3- PROMISE
const promessa = Promise.resolve(5 + 5) 

console.log('Algum código')

promessa.then((value) => {
    console.log(`A soma é ${value}`)
})

console.log('Outro código')


// 4- FALHA NA PROMISE
Promise.resolve(4 * 'asd')
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error('VAlores invalidos')
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`))