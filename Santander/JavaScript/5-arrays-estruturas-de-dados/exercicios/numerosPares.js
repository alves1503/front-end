//Crie um programa que percorre uma lista de numeros e imprima cada numero par

const numeros = [2, 5, 8, 7, 4];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(`O numero ${numeros[i]}  é par`);
  }/*  else {
    console.log(`O numero ${numeros[i]}  é impar`);
  } */
}
