function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sâo ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = './img/foto-manha.png'
        document.body.style.background = '#b18d4c'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = './img/foto-tarde.png'
        document.body.style.background = '#723c15'
    } else {
        //boa noite
        img.src = './img/foto-noite.png'
        document.body.style.background = '#765980'
    }
}