// Classe que representa um carro
class Carro {
  // O construtor recebe marca, cor e consumo médio (km por litro)
  constructor(marca, cor, consumoKmPorLitro) {
    this.marca = marca;
    this.cor = cor;
    this.consumoKmPorLitro = consumoKmPorLitro;
  }

  // Método para calcular o custo de uma viagem
  // Recebe a distância percorrida (em km) e o preço da gasolina (R$ por litro)
  calcularCustoViagem(distanciaKm, precoGasolina) {
    // Calcula quantos litros foram consumidos: distância ÷ consumo do carro
    const litrosConsumidos = distanciaKm / this.consumoKmPorLitro;

    // Multiplica os litros pelo preço da gasolina para achar o custo
    return litrosConsumidos * precoGasolina;
  }
}

function main() {
  // Definindo o preço da gasolina e a distância da viagem
  const precoGasolina = 6.25;
  const distanciaKm = 50;

  // Criando um carro da classe Carro
  // O Corolla faz em média 10 km por litro
  const corolla = new Carro("Corolla", "Vermelho", 10);

  // Calculando o custo da viagem com o método da classe
  const custoViagem = corolla.calcularCustoViagem(distanciaKm, precoGasolina);

  // Exibindo as informações do carro (opcional, para debug)
  console.log(corolla);

  // Exibindo o resultado formatado com 2 casas decimais
  console.log(
    `O valor gasto na viagem com o carro ${corolla.marca}, de ${distanciaKm} km, ` +
    `com gasolina a R$ ${precoGasolina} foi de R$ ${custoViagem.toFixed(2)}`
  );
}

// Chamando a função principal
main();
