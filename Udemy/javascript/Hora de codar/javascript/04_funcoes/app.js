// 01- Criando uma função

function minhaFuncao(nome) {
  console.log(`Ola ${nome}`);
}

minhaFuncao("Henrique");

//02- Return

const a = 10;
const b = 20;

function soma(x, y) {
  return x + y;
}

const resultado = soma(a, b);
console.log(resultado);

//03- Escopo da função

let y = 10;
function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da função é: ${y}`);
}
console.log(`Y fora da função é: ${y}`);
testandoEscopo();


