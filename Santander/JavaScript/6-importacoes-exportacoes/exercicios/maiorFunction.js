//Uma sala contem 5 alujos e para cada aluno foi sorteado um numero de 1 - 100.
//Fça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado

/*
Dados de entrada:
5 
50
10
98
23


Saida:
98
*/

const alunos = [5, 10, 50, 98, 23];

let maior = 0;

function gets() {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i] > maior) {
      maior = alunos[i];
    }
  }
  if (maior <= 100) {
  console.log(maior);
  } else {
    console.log(`Erro, o numero ${maior} é menor que '100'`)
  }
}

module.exports = {
  gets,
};
