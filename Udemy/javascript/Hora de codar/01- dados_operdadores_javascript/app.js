// 01- NUMBER
let x = 10;
console.log(x * 2);

// 02- Aritmética com Numbers
const x1 = 2;
const x2 = 3;
const soma = x1 + x2;
console.log(soma);

// 03- STRINGS
console.log("Isso é uma string");

// 04- Mais sobre strings
console.log("Primeira parte da string \nsegunda parte d string");

// 05- Concatenação
const firstName = "Henrique";
const lastName = "Alves";
console.log("Ola, seu nome é " + firstName + " e seu sobrenome é " + lastName);

// 06- Interpolação
const a = 10;
const b = 11;
console.log(`A soma de ${a} + ${b} = ${a + b}`);

// 07- Booleans
const acess = false;
if (acess == true) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso não liberado");
}

// 08- Comparações
a1 = 10;
if (a1 > 10) {
    console.log("É maior");
} else {
    console.log("Não é maior");
    
}

// 08- Comparação de idêntico
const k = "10";
const l = 10;
console .log(k == l); // Retorna 'True' Porque "10" é igual a 10
console .log(k === l); // Retorna 'False' Porque "10" é de tipo diferente a 10

// 09- Operadores lógicos
const f = 4;

if (f > 1 && f < 10) {
    console.log("Verdadeiro");
} else {
console.log("Falso");
}