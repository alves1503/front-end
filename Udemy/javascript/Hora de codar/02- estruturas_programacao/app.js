// 01- Variaveis
let name = "Henrique"; // POde ser alterada
const genero = "Masculino"; // Não pode ser alterado
var age = 20;

// 02- PROMPT
/* const x = prompt('Digite o valor de x: ');
const y = prompt('Digite o valor de y: ');
alert("O valor de ${x} + ${y} = ${x+y}"); */

// 03- Math
const num = 2.15;
const num1 = 3;
console.log(Math.max(num, num1));

// 04- IF
const firstName = "Henrique";
const ag = 20;

if (firstName >= 18) {
  console.log("Henrique é maior de idade");
} else {
  console.log("Henrique não é maior de idade");
}

// 05- if/else-if

const a = 10;
if (a < 10) {
  console.log("Criança");
} else if (a < 17) {
  console.log("Adolecente");
} else {
  console.log("Adulto");
}

// 06- While
/* const count = 10;
let i = 0
while (i <= 10) {
console.log(`${i} * ${count} = ${i * count}`);
i++;
} */

// 07- do-while

do {
  console.log("Executou primeiro");
} while (2 > 5);

// 08- for
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  const x = 5;
  console.log(`${i} * ${x} = ${i * x}`);
}
console.log("Fim do loop for");

// 09- Switch
const sem = 1;
let option;

switch (sem) {
  case 4:
    option = "Sorvete";
    break;
  case 2:
    option = "Picolé";
    break;
  case 3:
    option = "Geladinho";
    break;
  default:
    option = "Opção não valida";
}
console.log(option);
