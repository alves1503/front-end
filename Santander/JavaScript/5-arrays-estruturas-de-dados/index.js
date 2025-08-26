/* const caixaDeBrinquedos = ["Bola", "Boneca", "Peteca"];

console.log(caixaDeBrinquedos);

caixaDeBrinquedos.push("Carrinho de controle remoto");
console.log(caixaDeBrinquedos); */

const notas = [];

notas.push(5);
notas.push(4);
notas.push(8);
notas.push(4);
notas.push(9);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma = soma + nota;
}

const mediaNotas = soma / notas.length;
console.log(mediaNotas);
