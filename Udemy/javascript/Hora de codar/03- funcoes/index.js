// 01- Funções
function saudacao() {
  console.log("Ola, seja bem vindo!");
}

saudacao();

function param(name) {
  console.log("Ola " + name);
}
param("Henrique");

// 02- Retornando valores
function soma(x, y) {
  return x + y;
}
console.log(soma(5, 5));


// 03- Escopos
const x = 10;
function esco() {
    const x = 50;
    console.log("Escopo local: " + x);
}
console.log("Escopo global: " + x);
esco();

// 04- Arrow function
let name = () => {
    console.log("Hellow arrow");
}
name();