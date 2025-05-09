let n1 = prompt('Digite a primeira nota:');
let n2 = prompt('Digite a segunda nota:');
let n3 = prompt('Digite a terceira nota:');

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);

const media = (n1 + n2 + n3) / 3;

if (media >= 6) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}











