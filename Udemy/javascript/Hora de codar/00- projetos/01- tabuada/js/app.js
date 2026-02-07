// Seleção de elementos
const form = document.querySelector("form");
const numerInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const mutiplicationTable = document.querySelector("#multiplication-operator");
const span = document.querySelector("span");

// Funções
const createTable = (number, multiplicationNum) => {
  mutiplicationTable.innerHTML = "";

  for (let i = 1; i <= multiplicationNum; i++) {
    const result = number * i;
    console.log(result);

    const template = `
        <div class="row">
          <div class="operation">${number} x ${i} = </div>
          <div class="result">${result}</div>
        </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");
    mutiplicationTable.appendChild(row);
  }
  span.innerText = number;
};

// Eventos
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numerInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});
