//Faça um algoritimo que dado as tres notas de um aluno em um semestre da faculdade calcula e imprima sua media e a sua clasificação conferme a tabela abaixo

/*
menor que 5 = reprovado
menor entre 5 e 7 = recuperação
acima de 7 = aprovado*/

const nota1 = 0;
const nota2 = 2;
const nota3 = 4;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media)

if (media < 5) {
    console.log("Reprovado")
} else if (media < 7) {
    console.log("Recuperação")
} else {
    console.log("Aprovado")
}