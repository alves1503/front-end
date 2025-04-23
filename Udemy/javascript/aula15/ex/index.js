const number1 = prompt('Digite um numero:');

document.body.innerHTML = `<h1>Seu numero é ${number1}</h1>`;

document.body.innerHTML += `<p>Raiz Quadrada: ${Math.sqrt(number1)}</p> </br>`
document.body.innerHTML += `<p>${number1} é inteiro ${Number.isInteger(number1)} </p></br>`
document.body.innerHTML += `<p>${number1} é inteiro ${Number.isInteger(number1)}</p> </br>`
document.body.innerHTML += `<p>Arredondado para baixo ${Math.floor(number1)}</p> </br>`
document.body.innerHTML += `<p>Arredondado para cima ${Math.ceil(number1)}</p> </br>`
document.body.innerHTML += `<p>Com duas casas decimais: ${number1.toFixed(2)}</p> </br>`   