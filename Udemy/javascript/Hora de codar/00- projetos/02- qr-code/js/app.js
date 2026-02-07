const container = document.querySelector(".container");
const btn = document.querySelector("button");
const qrInput = document.querySelector("#qr-form input");
const qrCodeImage = document.querySelector(".qr-code img");

// Eventos

// Gerar qr code
function generatorQrCode() {
  const qrValue = qrInput.value;

  if (!qrValue) return;

  btn.innerText = "Gerando código...";

  qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

  qrCodeImage.addEventListener("load", () => {
    container.classList.add("active");
    btn.innerText = "Código criado";
  });
}
btn.addEventListener("click", () => {
  generatorQrCode();
});

qrInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generatorQrCode();
  }
});

// limpar area do qrcode
qrInput.addEventListener("keyup", (e) => {
  if (!qrInput.value) {
    container.classList.remove("active");
    btn.innerText = "Gerar Qr code";
  }
});
