const valorDoproduto = Number(prompt("Valor do produto: "));

const valorDoprodutoVista = valorDoproduto - (valorDoproduto * 0.10); //Desconto de 10% a vista
const valorProdutoEmTresVezes = valorDoproduto / 3;

console.log(`Valor do produto: R$ ${valorDoproduto}`);
console.log(`A vista: R$ ${valorDoprodutoVista}`);
console.log(`Em 3x: R$ ${valorProdutoEmTresVezes}`);