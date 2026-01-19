// 01- Arrays

const dados = ["Henrique", 20, true];
console.log(dados);

// 02- Propriedade
const number = [1, 5, 6];
console.log(number.length);

// 03- Metodos
const met = [1, 2, 3];
console.log(number.concat(met));

// 04- Objetos
const person = {
  name: "Henrique",
  age: 20,
};
console.log(person.name);

// 05- Criando e removendo propriedades
const car = {
  engine: 2.0,
  brand: "Vw",
  model: "Trinag",
};

car.doors = 4;
console.log(car);
delete car.model;
console.log(car);

// 06- Mutação
const a = {
  name: "Henrique",
};

const b = a;
console.log(a === b);
a.age = 31;
console.log(a === b);

// 07- Loop em arrays
const dad = ["Henrique", "Maria", "João", "Ana"];

for (let i = 0; i < dad.length; i++) {
  console.log(dad[i]);
}

// 08- Push e Pop
dad.push("Mateus");
console.log(dad);
dad.pop();
console.log(dad);

// 09- Shift e Unshit
dad.shift();
console.log(dad);
dad.unshift("Ana");
console.log(dad);

// 10- IndexOf e lastindexOf
console.log(dad.indexOf("Ana"));
console.log(dad.lastIndexOf("Ana"));

// 11- Slice
const sliceT = ["a", "b", "c"];

const subArray = sliceT.slice[(1, 2)];
console.log(subArray);

// 12- Foreach

const names = ["Henrique", "Ana", "Paulo"];
names.forEach((nome) => {
  console.log(nome);
});

// 13- Includes

const i = ["Carro", "Moto"];
console.log(i.includes("Bike"));

// 14- Reverse
const rev = [1, 4, 600];
rev.reverse();
console.log(rev);

// 15- Trim
const fistName = "Henrique \n";
console.log(fistName);
console.log(fistName.trim());

// 16- Padstart
const n = "1";
console.log(n.padStart(4, "0"));
console.log(n.padEnd(10, "0"));

// 17- Split
const teste = "Henrique Alves Gonçalves";
console.log(teste.split(" "));

// 18- Join
const j = ["Henrique", "Alves", "Gonçalves"];
console.log(j.join(" - "));

// 19- Repeat
const rep = "Alves";
console.log(rep.repeat(2));

// 20- Rest Operator

const somaInf = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(somaInf(1, 2, 3));

// 21- Estrutura for of
const somInf2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }
  return total;
};

console.log(somInf2(2, 2));

// 22- Destructuring
const userDetails = {
  firstName: "Henrique",
  lastName: "Alves",
};

const { firstName, lastName } = userDetails;
console.log(firstName, lastName);

// 23- Destructuring em arrays
const descNames = ["Henrique", "Maria"];
const [mas, fem] = descNames;
console.log(mas, fem);

// 24- Json

const myJson =
  '{"name": "Henrique", "age": 20, "stack": ["PHP", "javaScript", "java"]}';

  const converJson = JSON.parse(myJson)
  console.log(converJson);