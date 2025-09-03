let dados = {
  name: "Henrique",
  age: 20,
  products: {
    0: ["Mouse", 20],
    1:["Monitor", 200]
  },
};

function gerarDados(dados) {
  console.log(`Ola ${dados.name}`);
  console.log(`Sua idade é ${dados.age}`);
  console.log(`Seu primeiro produto da sua lista é ${dados.products[0]}`);

  for (let index in dados.products) {
    let [productName, productPrice] = dados.products[index];
    console.log(`${productName}: R$ ${productPrice}`);
  }
}

gerarDados(dados);
