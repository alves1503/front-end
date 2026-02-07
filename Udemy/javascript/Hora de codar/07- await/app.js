// 01 - Função setTimeout
console.log("Ainda não executou");

setTimeout(function () {
  console.log("Função assincrona");
}, 2000);

console.log("Ainda não executou 2");

// 02- Função setInterval
/* console.log("Ainda não começou");

setInterval(function () {
  console.log("Set interval");
}, 3000);

console.log("Ainda não começou 2"); */

// 03 Promises
const promessa = Promise.resolve(5 + 5);

console.log("Algum código");
promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`Agora é ${value}`));
console.log("Outro código");

// 04- Tratando eros nas Promises
Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores invalidos");
    }
  })
  .catch((err) => console.log(`Um ero ocorreu: ${err}`));

// 05- Rejeitando Promises
/* function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10`);
    } else {
      reject(new Error("Numero muito baixo"));
    }
  });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) =>
  console.log(`O resultado é ${v}`).catch((err) => {
    console.log(`Um erro ocorreu: ${err}`);
  }),
);

b.then((v) =>
  console.log(`O resultado é ${v}`).catch((err) => {
    console.log(`Um erro ocorreu: ${err}`);
  }),
);
 */

// 06- Async functions
async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((values) => {
  console.log(`A soma é: ${values}`);
});

// 07- Await
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a Promise");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a promise, e esperando o resultado");
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
