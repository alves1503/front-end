var agora = new Date() //Pega a hora 


var hora = agora.getHours()


console.log(`Agora são exatamentes ${hora} horas`)


if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}