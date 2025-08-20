const valorConta = Number(prompt("Digite o valor a da sua conta"));
const quantidadeDeClientes = Number(prompt("Digite a quantidade de pessoas que serão dividas valor: "));
const valorPorCliente = valorConta / quantidadeDeClientes;

console.log(`O valor total é de ${valorConta} R$, dividido para ${quantidadeDeClientes} sai no valor de ${valorPorCliente} R$`)