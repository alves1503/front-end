function tabuada() {
    var tab = document.getElementById('txttab')
    var tabuada = document.getElementById('seltab')


    if (tab.value.length == 0) {
        alert('Por favor digite um numero!!')

    } else {
        let n = Number(tab.value)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }

    }

}