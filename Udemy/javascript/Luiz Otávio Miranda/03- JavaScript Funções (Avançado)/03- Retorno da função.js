//return
//Retorna um valor
//Termina um valor

function soma(a, b) {
    return a + b;
}

console.log(soma(1, 2));


function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Henrique', 'Alves');
console.log(p1);


//------------------------------------------------------------------------------------
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const olaMund = falaFrase('Ola');
console.log(olaMund('Mundo'));



//----------------------------------------------------------------------

function craMultiplicado(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}

const duplica = craMultiplicado(2);
const triplica = craMultiplicado(3);
const quadriplica = craMultiplicado(4);

console.log(duplica(2));
console.log(triplica(8));
console.log(quadriplica(2));