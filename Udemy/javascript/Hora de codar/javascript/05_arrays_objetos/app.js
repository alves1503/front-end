// 01- Arrays
const animais = ["Peixe", "Boi", "Elefante"];

console.log(animais);
console.log(animais.length);

// 02- propriedade
const number = [1, 2, 34, 20];

console.log(number.length);

const myNmae = "Henrique";
console.log(myNmae.length);

//04- Metodos
const metodos = [1, 2, 6];
const allnumbers = number.concat(metodos);
console.log(allnumbers);

//05- Objetos
const pessoa = {
  id: 1,
  nome: "Henrique",
  idade: 20,
  cadastro: false,
};

if (pessoa.cadastro === true) {
  console.log(`Seja bem vindo ${pessoa.nome}`);
} else {
  console.log("Acesso não permitido");
}

// 06- Criando e deletando novas proproiedades
const car = {
  enginer: 2.0,
  brand: "vw",
  model: "Tiguan",
  km: 20000,
};

console.log(car);

car.dors = 4; //Adcionando propriedade

console.log(car);

delete car.km; // deletando propriedade

console.log(car);

// 07- mais sobre objetos

const obj = {
  a: "Teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);
console.log(obj2);

// 08- Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));

// 09- Mutação
const a = {
  name: "Henrique",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 20;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

//--------------------------------------------------------------------------------------------------------------------------------

// 10- Loop em array
const users = ["Henrique", "Pedro", "Bianca"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

// 11- push e pop
const array = ["a", "b", "c"];
array.push("d");
console.log(array);
const arrayRemovido = array.pop();
console.log(array);

// 12- Shift e unshifit
const letras = ["v", "d", "c"];

const letter = letras.shift();

console.log(letras);
console.log(letter);

letras.unshift("a", "f", "d");
console.log(letras);

// 13- IndexOf LastIdexOf
const myElements = ["Maça", "Pera", "Abacate"];

console.log(myElements.indexOf("Maça"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements.lastIndexOf("Abacate"));

// 14- Slice

const testeSlice = ["a", "b", "c", "d", "e"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15- forEach
const nums = [1, 2, 3, 4, 56];

nums.forEach((numero) => {
  console.log(`O numero é: ${numero}`);
});

const posts = [
  { title: "Primeiro post", category: "Php" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Java" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title} da categoria ${post.category}`);
});

// 16- Includes
const brands = ["BMW", "VW", "FIAT"];

console.log(brands.includes("FIAT"));

console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
  console.log("A carro da marca BMW");
}

// 17- Reverse
const reversetest = [1, 2, 3, 4, 5];

reversetest.reverse();

console.log(reversetest);

// -------------------------------------------------------------------------------------------------------------------------------------

// 18- Trim
const trimTeste = "   diuqd \n";
console.log(trimTeste);
console.log(trimTeste.trim());

// 19- Padstart
const testPadstart = "10";

const newnumber = testPadstart.padStart(4, "0");

console.log(testPadstart);
console.log(newnumber);

// 20- Split
const frase = "O rato roeu a roupa do rei de roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21- join
const fraseDeNovo = arrayDaFrase.join(" ");
console.log(fraseDeNovo);

// Estrutura for of
const somaInfinita = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita(1, 2, 3));

//Destructuring em objetos

const animais2 = {
  animal: "Pato",
  idade: 20,
};

const { animal, idade } = animais;

console.log(animal, idade);

//Destructuring em arrays
const myVeiculos = ["Avião", "Carro", "Moto"];

const [veiculoA, veiculoB, veiculoC] = myVeiculos;

console.log(veiculoA, veiculoB, veiculoC);

// Json
const myJson =
  '{"name": "Henrique", "age": "20", "skills": ["JavaScript", "C#", "Java"]}';

//Json para objetos e objetos para json
const myObject = JSON.parse(myJson);
console.log(myObject);
