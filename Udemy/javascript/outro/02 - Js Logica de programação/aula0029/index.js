// Função que recebe um número de 0 a 6 (representando o dia da semana)
// e retorna o nome do dia correspondente em português.
function getDiaSemanaTexto(diaSemana) {
    
    // Estrutura condicional switch: usada para comparar uma variável
    // (no caso, diaSemana) com vários valores diferentes.
    switch (diaSemana) {

        // Se diaSemana for 0, retorna 'Domingo'
        case 0:
            return 'Domingo';

        // Se diaSemana for 1, retorna 'Segunda'
        case 1:
            return 'Segunda';

        // Se diaSemana for 2, retorna 'Terça'
        case 2:
            return 'Terça';

        // Se diaSemana for 3, retorna 'Quarta'
        case 3:
            return 'Quarta';

        // Se diaSemana for 4, retorna 'Quinta'
        case 4:
            return 'Quinta';

        // Se diaSemana for 5, retorna 'Sexta'
        case 5:
            return 'Sexta';

        // Se diaSemana for 6, retorna 'Sabado'
        case 6:
            return 'Sabado';

        // Se o valor não estiver entre 0 e 6, retorna uma string vazia.
        // Isso serve como "plano B" caso o valor seja inválido.
        default:
            return '';
    }
}

// Cria uma data específica usando o objeto Date.
// Aqui estamos passando a data 24 de março de 2000 às 00:00.
const data = new Date('2000-03-24 00:00:00');

// O método getDay() retorna o número do dia da semana:
// 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
let diaSemana = data.getDay();

// Chamamos a função para converter o número em texto.
// Exemplo: se diaSemana for 5, retorna 'Sexta'.
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

// Exibe no console:
// primeiro o número do dia da semana,
// depois o nome correspondente em texto.
console.log(diaSemana, diaSemanaTexto);
