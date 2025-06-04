// 01- ADICIONANDO EVENTOS
const btn = document.querySelector('#myButton')

btn.addEventListener('click', function () {
    console.log('Clicou aqui')
})



// 02- REMOVENDO EVENTOS
const secondButton = document.querySelector('#btn')

function imprimiButton() {
    console.log('Teste')
}

secondButton.addEventListener('click', imprimiButton)

// Outro botão //

const thirdButton = document.querySelector('#otherBtn') 

thirdButton.addEventListener('click', () => {
    console.log('Evento removido')
    secondButton.removeEventListener('click', imprimiButton)
})


// 03- Argumento do evento
const myTitle = document.querySelector('#myTitle')

myTitle.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.srcElement)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})