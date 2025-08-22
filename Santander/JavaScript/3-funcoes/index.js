///Calcula o imc
function caclcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

//Classifica o imc
function classificarImc(seuImc) {
  if (seuImc < 18.5) {
    return "Abaixo do peso";
  } else if (seuImc < 25) {
    return "Peso normal";
  } else if (seuImc < 30) {
    return "Acima do peso";
  } else if (seuImc < 40) {
    return "Obeso";
  } else {
    return "Obesidade Grave";
  }
}

function main() {
  const peso = 70;
  const altura = 1.8;

  const imc = caclcularImc(peso, altura);
  console.log(classificarImc(imc));
}

main();
