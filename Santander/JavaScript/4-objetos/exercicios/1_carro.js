/*
Crie uma classe para representar carros.
OS carros possuem uma marca,uma cor e um gasto medio de combustive por km rodado,
crie um metodo que dado a quantidade de km e o preco do combustivel nos de o valor gasto em reais para realizar o percurso
*/

let precoGasolina = 6.25;
let quantidadeDeKmRodado = 50;


class Carro {
  marca;
  cor;
  gasto; //10

  constructor(marca, cor, gasto) {
    this.marca = marca;
    this.cor = cor;
    this.gasto = gasto;
  }
}

function calcularGastoViajem(carro) {
  const quantidadeGastaLitroPorKm = quantidadeDeKmRodado / carro.gasto;
  const valorGastoViajem = quantidadeGastaLitroPorKm * precoGasolina;

  console.log(`O valor gasto na viajem com o carro ${carro.marca}, de ${quantidadeDeKmRodado}KM de viajem, com preço da gasolina de ${precoGasolina}R$ foi de ${valorGastoViajem}R$`);
}

function main() {
  const corola = new Carro("Corola", "Red", 10);
  console.log(corola);
  calcularGastoViajem(corola);
}

main();
