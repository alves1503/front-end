const form = document.querySelector("form")
const res = document.querySelector("pre")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(form.number.value)
    let resposta = ""

    for(let i = 1; i <= 10; i++) {
        resposta = `${resposta}${numero} x ${i} = ${numero*i}\n`
    }

    res.innerText = resposta
})