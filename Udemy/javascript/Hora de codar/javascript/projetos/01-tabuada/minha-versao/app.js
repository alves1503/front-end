const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const titulo = document.querySelector(".titulo-res");

botao.addEventListener("click", (e) => {
    
    const numero = document.querySelector("#numero").value;
    const meuNumero = Number(numero);
    
    const multiplicar = document.querySelector("#multiplicar-por").value;
    const numeroMultiplicar = Number(multiplicar);
    
    titulo.textContent = `Tabuada do número: ${meuNumero}`;
    
    const resposta = document.querySelector(".res");
    
    for (let i = 0; i <= numeroMultiplicar; i++) {
        const item = document.createElement("p")
        item.textContent = `${meuNumero} X ${i} = ${meuNumero * i}`
        resposta.appendChild(item)
    } 
    e.preventDefault();
});
