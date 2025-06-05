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


// 04- PROPAGAÇÃO
const divButton = document.querySelector('#btnContainer')
const insideButton = document.querySelector('#container')

divButton.addEventListener('click', () => {
    console.log('Evento 1')
})

insideButton.addEventListener('click', () => {
    console.log('Evento 2')
})


// 05- REMOVENDO EVENTO PADRÃO
const a = document.querySelector('a')

a.addEventListener('click', (e) => {
    e.preventDefault()

    console.log('Não alterou a pagina')
})



// 06- EVENTOS DE TECLA
document.addEventListener('keyup', (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener('keydown', (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})


// 07- EVENTOS DE MOUSE
const eventMouse = document.querySelector('#mouse')


eventMouse.addEventListener('mousedown', () => {
    console.log('Pressionou o botão')
})

eventMouse.addEventListener('mouseup', () => {
    console.log('Soltou o botão')
})

eventMouse.addEventListener('dblclick', () => {
    console.log('Click 2x o botão')
})


/* // 08- MOVIMENTO DE MOUSE 
document.addEventListener('mousemove', (e) => {
    console.log(`No eixo X: ${e.x}`)
    console.log(`No eixo Y: ${e.y}`)
}) */


// 09- EVENTO DE SCROLL
window.addEventListener('scroll', (e) => {
    if(window.pageXOffset > 100) {
        console.log('Passamos de 200px')
    }
})