let num =  document.querySelector('#txtnum') // Seleciona o input com id 'txtnum' (campo onde o usuário digita o número)
let select = document.querySelector('#select') // Seleciona o elemento select com id 'select' (lista que exibe os números adicionados)
let res = document.querySelector('#res') // Seleciona a div com id 'res' (onde será exibido o resultado final)
let valores = [] // Cria um array vazio que armazenará os números adicionados

// Função que verifica se o número está entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true // Retorna verdadeiro se o número estiver no intervalo
    } else {
        return false // Retorna falso se estiver fora do intervalo
    }
}

// Função que verifica se o número já está presente na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true // Retorna verdadeiro se o número já estiver na lista
    } else {
        return false // Retorna falso se o número ainda não estiver na lista
    }
}

// Função chamada ao clicar no botão "Adicionar"
function adicionar() {
    // Verifica se o valor digitado é válido e ainda não está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // Adiciona o número ao array 'valores'

        let item = document.createElement('option') // Cria um novo elemento <option> para o select
        item.text = `Valor ${num.value} adicionado` // Define o texto da opção criada
        select.appendChild(item) // Adiciona o <option> ao elemento select
        res.innerHTML = '' // Limpa o conteúdo da div de resultado
    } else {
        alert('Valor invalido ou ja encontrado na lista') // Alerta caso o valor seja inválido ou repetido
    }

    num.value = '' // Limpa o campo de input
    num.focus() // Coloca o foco novamente no campo de input
}

// Função chamada ao clicar no botão "Finalizar"
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!!') // Alerta se a lista estiver vazia
    } else {
        let total = valores.length // Armazena a quantidade total de números adicionados
        let maior = valores[0] // Assume inicialmente que o primeiro número é o maior
        let menor = valores[0] // Assume inicialmente que o primeiro número é o menor
        let soma = 0 // Variável para armazenar a soma dos números
        let media = 0 // Variável para armazenar a média

        // Loop para percorrer todos os valores no array
        for (let pos in valores){
            soma += valores[pos] // Soma os valores

            if (valores[pos] > maior)
                maior = valores[pos] // Atualiza o maior valor, se necessário

            if (valores[pos] < menor)
                menor = valores[pos] // Atualiza o menor valor, se necessário
        }

        media = soma / total // Calcula a média

        res.innerHTML = '' // Limpa o conteúdo atual da div de resultado

        // Exibe as informações calculadas na tela
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrado</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digiitados é: ${media}</p>` // (obs: "digiitados" contém um erro de digitação)
    }
}
