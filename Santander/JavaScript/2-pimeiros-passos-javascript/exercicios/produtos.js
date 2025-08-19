/*
A vista debito rcebe 10% de desconto
A vista dinheiro ou pix recebe 15% de descoto
Em duas vezes preço normal sem juros
Acima de das vezes preço normal mais 10% juros
*/

const nomeDoProduto = "Headset"
const valorProduto = 100;
const quantidadeDeParcelas = 5;
const formaDePagamento = "Credito" //Debito,Dinheiro,Pix ou Credito

const valorProdutoVistaDebito = valorProduto - (valorProduto * 0.10); //10% de desconto
const valorProdutoVistaDinheiroPix = valorProduto - (valorProduto * 0.15); //15% de desconto

const valorProdutoAcimaDeDuasParcelas = valorProduto * 0.10 + valorProduto;
const valorProdutoPorParcelas = (valorProduto * 0.10 + valorProduto) / quantidadeDeParcelas;


if (formaDePagamento === "Debito") {
    console.log(`O seu ${nomeDoProduto} com o valor de ${valorProduto}R$ no formato de pagamento de ${formaDePagamento} sai no preço de ${valorProdutoVistaDebito}R$`)
} else if (formaDePagamento === "Pix" || formaDePagamento === "Dinheiro") {
    console.log(`O seu ${nomeDoProduto} com o valor de ${valorProduto}R$ no formato de pagamento de ${formaDePagamento} sai no preço de ${valorProdutoVistaDinheiroPix}R$`)
} else if (formaDePagamento === "Credito" && quantidadeDeParcelas <= 2) {
    console.log(`O seu ${nomeDoProduto} com o valor de ${valorProduto}R$ no formato de pagamento de ${formaDePagamento} sai no preço de ${valorProduto}R$ com ${quantidadeDeParcelas} parcelas no valor ${valorProduto / quantidadeDeParcelas}R$`)
} else if (formaDePagamento === "Credito" && quantidadeDeParcelas > 2) {
    console.log(`O seu ${nomeDoProduto} com o valor de ${valorProduto}R$ no formato de pagamento de ${formaDePagamento} sai no preço de ${valorProdutoAcimaDeDuasParcelas}R$ com ${quantidadeDeParcelas} parcelas no valor ${valorProdutoPorParcelas}R$`)
}

