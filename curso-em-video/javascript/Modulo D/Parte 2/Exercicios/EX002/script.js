function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')


    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','./img/criançaH.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','./img/jovemH.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','./img/adultoH.png')
            } else {
                //idoso
                img.setAttribute('src','./img/idosoH.png')
            }



        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','./img/criançaM.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','./img/jovemM.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','./img/adultoM.png')
            } else {
                //idoso
                img.setAttribute('src','./img/idosoM.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos genero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}