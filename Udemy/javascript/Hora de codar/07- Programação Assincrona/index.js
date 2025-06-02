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

/* // 3- PROMISE
const promessa = Promise.resolve(5 + 5)

console.log('Algum código')

promessa.then((value) => {
    console.log(`A soma é ${value}`)
})

console.log('Outro código')


// 4- FALHA NA PROMISE
Promise.resolve(4 * 'asd')
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error('VAlores invalidos')
        }
    })
    .catch((err) => console.log(`Um erro ocorreu: ${err}`))

// 5- REJEIÇÃO
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O numero é maior que 10`)
        } else {
            reject(new Error("Numero muito baixo"))
        }
    })
}

const a = checkNumber(20)
const b = checkNumber(10)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu: ${err}`)
); */


// 6- RESOLVENDO PROMISES
const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10)
    }, 1000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30)
    } else {
        reject("Error!")
    }
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))


// 7- ASYNC FUNCTIONS
async function somarComDelay(a,b) {
    return a + b
}

somarComDelay(2,4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
})

console.log('Teste asnc')

// 8 -ASYNC AWAIIT
function resolveComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolveu a promise')
        },2000)
    })
}

async function chamadaAsync() {
    console.log('Chamando a promise, e esperando o resultado') 
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}


chamadaAsync()


// 9- GENERATOR

function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)