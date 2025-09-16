const form = document.querySelector('form');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

form.addEventListener("submit", (e) => {
    const nome = form.name.value;
    const notaUm = Number(form.nota1.value);
    const notaDois = Number(form.nota2.value);
    const media = (notaUm + notaDois) / 2;

    h3.innerText = `Media das notas: ${media}`;
    if (media >= 7) {
        h4.innerText = `Parabens ${nome}! Você foi aprovado`;
        h4.style.backgroundColor = "green"
    } else  {
        h4.innerHTML = `Sinto muito ${nome}! Você foi reprovado`;
        h4.style.backgroundColor = "red"
    }

    e.preventDefault();
});