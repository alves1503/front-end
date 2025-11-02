/* // 01- Função SetTimeout

console.log("Ainda não executou");

setTimeout(function () {
  console.log("Requisião asssincrona");
}, 2000);

console.log("Ainda não executou 2");

// 02- Função setInterval
/* console.log("Ainda não começou");

setInterval(function () {
  console.log(`Intervalo assincrono`);
}, 3000);

console.log("Ainda não começou 2"); */

/* // 03- Promises
const promessa = Promise.resolve(5 + 5);

console.log("Algum codigo");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })

  .then((value) => value - 1)
  .then((value) => console.log(`Agora é ${value}`));

console.log("Outro codigo");

// 04- Falha na s promises
Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores invalidos");
    }
  })
  .catch((err) => console.log(`Ocorreu um erro: ${err}`));
 */

// 05- Rejeição */
function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O numero é maior que 10`);
    } else {
      reject(new Error("O numero é muito baixo"));
    }
  });
}

const a = checkNumber(20);
const b = checkNumber(10);

console.log(a, b);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => {
  console.log(`Um erro ocorreu: ${err}`);
});
b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => {
  console.log(`Um erro ocorreu: ${err}`);
});

// 06- Varias promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("ERRO!");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 07- Async
async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => {
  console.log(`A valor da soma é: ${value}`);
});

// 07- Assertions
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resoveu a promise");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamada a Promise, e esperando o resultado");
  const result = await resolveComDelay();
  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// 08- Generators
function* generator() {
  yield 1;
  yield 2;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
