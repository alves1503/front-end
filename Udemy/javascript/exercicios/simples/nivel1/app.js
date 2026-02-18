const name = "Henrique";
const age = 15;
const salary = 2001;

const podeSerContratado = (idade) => {
  if (idade >= 18) {
    return `Você tem ${idade} anos e pode ser contratado`;
  } else {
    return `Você tem ${idade} anos e não pode ser contratado`;
  }
};

const infoSalario = (salario) => {
  if (salario > 2000) {
    return `Seu sálario de R$ ${salario} está acima da média`;
  } else {
    return `Seu sálario de R$ ${salario} está abaixo da média`;
  }
};

function apresentar(nome, idade, salario) {
  const mensagemFinal = `
Olá ${nome}
-----------------------
${podeSerContratado(idade)}
${infoSalario(salario)}
-----------------------
`;

  return mensagemFinal;
}

console.log(apresentar(name, age, salary));
