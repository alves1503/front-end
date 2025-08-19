/*
IMC
IMC = PESO / (ALTURA * ALTURA)

Em adultos condições
Abaixo de 18,5 = abaixo do peso
entre 18,5 e 25 peso motmal
entre 25 e 30 acima do peso
entre 30 e 40 obeso0
acima de 40 Obesidade grave

*/


let seuPeso = 40;
let suaAltura = 1.80;

const seuImc = seuPeso / (suaAltura * suaAltura);

if (seuImc < 18.5) {
    console.log("Abaixo do peso")
} else if (seuImc < 25) {
    console.log("Peso normal")
} else if (seuImc < 30) {
    console.log("Acima do peso")
} else if (seuImc < 40) {
    console.log("Obeso")
} else {
    console.log("Obesidade Grave")
}