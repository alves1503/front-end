// Seleciona o elemento <h1> que está dentro da classe .container no HTML
const h1 = document.querySelector('.container h1');

// Cria um objeto de data com a data e hora atual
const data = new Date();

// Neste momento o conteúdo do h1 é substituído pela string completa da data (ex: "Fri Mar 24 2000 ...")
h1.innerHTML = data.toString();


// Função que recebe um número de 0 a 6 (retornado por getDay()) e retorna o nome do dia da semana em português
function getDiaSemanaTexto(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'Domingo';          // 0 = Domingo
        case 1:
            return 'Segunda-feira';    // 1 = Segunda
        case 2:
            return 'Terça-feira';      // 2 = Terça
        case 3:
            return 'Quarta-feira';     // 3 = Quarta
        case 4:
            return 'Quinta-feira';     // 4 = Quinta
        case 5:
            return 'Sexta-feira';      // 5 = Sexta
        case 6:
            return 'Sabado';           // 6 = Sábado
        default:
            return '';                 // Caso o número esteja fora do intervalo 0–6
    }
}


// Função que recebe um número de 0 a 11 (retornado por getMonth()) e retorna o nome do mês
function getNomeMes(numeroMes) {
    let nomeMes;
    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
    }
}


// Função principal que cria a data formatada em português no formato:
// "DiaSemana, Dia de Mês de Ano Hora:Minutos"
function criaData (data) {
    const diaSemana =  data.getDay();    // Pega o número do dia da semana (0 a 6)
    const diaMes = data.getMonth();      // Pega o número do mês (0 a 11)

    const nomeDia = getDiaSemanaTexto(diaSemana); // Converte o número do dia em nome
    const nomeMes = getNomeMes(diaMes);           // Converte o número do mês em nome

    // Monta a string da data formatada
    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +             // ex: Terça-feira, 24 de Março
    ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}` // ex: de 2000 13:45
    );
}

// Substitui o conteúdo do h1 pela data formatada gerada pela função criaData
h1.innerHTML = criaData(data);
