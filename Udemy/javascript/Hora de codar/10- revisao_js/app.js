// 01- Variaveis
const c1 = "Não pode ser modificado";
let l1 = "Pode ser modificado";
console.log(c1, l1);

// 02- arrow function
const exibirNome = (name) => {
  console.log(`Seja bem vindo ${name}`);
};
exibirNome("Henrique");

// 03- Filter
const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Henrique", avaliable: true },
  { name: "Ana", avaliable: true },
  { name: "Mateus", avaliable: false },
  { name: "Paula", avaliable: true },
  { name: "Marina", avaliable: false },
];

const usAvaliable = users.filter((user) => user.avaliable);
console.log(usAvaliable);

// 04- Map
const product = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira", price: 20.99, category: "Eletro" },
  { name: "Fogão", price: 499, category: "Eletro" },
];

product.map((product) => {
  if (product.category === "Roupas") {
    product.onsale = true;
  }
});

console.log(product);

// 05- Template literals
const firstName = "Henrique";
console.log(`Seja bem vindo ${firstName}`);

// 06- Destructuring
const prod = {
  name: "Liquidificador",
  price: 100,
};

const { name, price } = prod;
console.log(price);

const frutas = ["Maçã", "Banana", "Pera"];
const [maca, banana, pera] = frutas;
console.log(maca);

// 07- Spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);

// 08- Classes
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  exibir() {
    return `Seu nome é ${this.name} e tem ${this.age} anos`;
  }
}

const henrique = new User("Henrique", 20);
console.log(henrique.exibir());

// 09- Herança
class Student extends User {
  constructor(name, price, prof) {
    super(name, price);
    this.prof = prof;
  }

  exibirProf() {
    return `Sua profissão é ${this.prof}`;
  }
}

const marcos = new Student("Mateus", 20, "Estudante");
console.log(marcos.exibir());
console.log(marcos.exibirProf());
