function contar() {
    var inicio = document.getElementById('txtin')
    var fim = document.getElementById('txtnum')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Dados incorretos, tente novamente')
    } else if (i < f) {
        res.innerHTML = 'Contando: '
        for (var adicionar = i; adicionar <= f; adicionar += p) {
            res.innerHTML += `${adicionar} 👉`
        }
    } else if (i > f) {
        res.innerHTML = 'Contando: '
        for (var adicionar = i; adicionar >= f; adicionar -= p) {
            res.innerHTML += `${adicionar} 👉`
        }

    }


}