//Declaração de função

function falaOi() {
    console.log("OI");
}

falaOi();

//First-class objects (Objetos de primeira classe)
// Function expresson

const souUmDado = function() {
    console.log("Sou um dado");
};


function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const arrow = () => {
    console.log("Sou uma arrow function");
};
arrow();

//Dentro de objeto

const obj = {
    falar: function() {
        console.log("Bla bla bla");
    }
};
obj.falar();