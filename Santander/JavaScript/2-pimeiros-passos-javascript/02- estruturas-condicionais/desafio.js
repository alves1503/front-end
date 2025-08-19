let precoEtanol = 5.45;
let precoGasolina = 6.45;
const tipoDeCombustivel = "Etanol";
const gastoMedioPorKm = 20; //1L Faz 20 km
const distanciaViagem = 40; //KM 

const qunatidadeGastoLitro = distanciaViagem / gastoMedioPorKm;

if (tipoDeCombustivel === "Gasolina") {
    const valorGasolina = qunatidadeGastoLitro * precoGasolina;
    console.log(`O valor gasto pela viagem com ${tipoDeCombustivel} foi ${valorGasolina.toFixed(2)}`);
} else if (tipoDeCombustivel === "Etanol") {
    const valorEtanol = qunatidadeGastoLitro * precoEtanol;
    console.log(`O valor gasto pela viagem com ${tipoDeCombustivel} foi ${valorEtanol.toFixed(2)}`);
}
