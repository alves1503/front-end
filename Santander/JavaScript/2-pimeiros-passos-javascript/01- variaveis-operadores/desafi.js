let precoCombustivel = 5.79;
let gastoMedioCombustivel = 12; //A cada 1L faz 20KM
let distanciaViagem = 1580; //KM

let valorPago = distanciaViagem / gastoMedioCombustivel * precoCombustivel;

console.log(`O valor pago para uma distancia de ${distanciaViagem}KM é de ${valorPago.toFixed(2)}`);