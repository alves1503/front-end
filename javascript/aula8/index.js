const nome = 'Henrique';
const sobrenome = 'Alves';
const idade = 20;
const peso = 70;
const altura = 1.80;

let imc = peso / (altura * altura);
let anoNascimento = 2025 - idade;


console.log(nome,sobrenome,'tem',idade,'anos pesa',peso,'Kg tem',altura,'de altura e seu IMC é de',imc,'nascido em',anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} Kg tem altura de ${altura} e seu IMC é de ${imc} nascido em ${anoNascimento}`);