// Seleção de eventos
const multiplicatorForm = document.querySelector("#mutiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector("#multiplicatio-title span")

const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

//Funções
const createTable = (number, multiplicatorNumer) => {
  multiplicationTable.innerHTML = "";

  for (let i = 0; i <= multiplicatorNumer; i++) {
    const result = number * i;

    const template = `<div class="row"><div class="operation">${number} x ${i} = </div><div class="result">${result}</div></div.`;


    const parser = new DOMParser()

    const htmlTemplate = parser.parseFromString(template, "text/html")

    const row = htmlTemplate.querySelector(".row")

    multiplicationTable.appendChild(row)
    multiplicationTitle.innerText = number

  }
};

// Eventos
multiplicatorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatiorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatiorNumber) return;

  createTable(multiplicationNumber, multiplicatiorNumber);
});
