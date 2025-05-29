// 01-  ARRAYS
const list = [1, 2, 3, 4, 5]    

console.log(list)

// 02- MAIS SOBRE ARRAYS 
const arr = ['a', 'b']

console.log(arr[0])

// 03- PROPRIEDADES 
const numbers = [5, 4, 8]


console.log(numbers.length)
console.log(numbers["length"])

const myName = 'Henrique'

console.log(myName.length)


// 04- METODOS 
const otherNumber = [1, 2, 3]
const allNumbers = numbers.concat(otherNumber)

console.log(allNumbers)


const text = 'alves'

console.log(text.toUpperCase())
console.log(text.indexOf('a'))


// 05- OBJETOS
const person = {
    name: 'Henrique',
    age: 20,
    job: 'Desenvolvedor'
}

console.log(person.job)

// 06- CRINDO E DELETANDO PROPRIEDADES
const car = {
    model: 'Gol',
    age: 2020,
    engine: 1.8,
    km: 10000,
}

console.log(car)

car.doors = 'Teste' // adiciona a propriedade

console.log(car)

delete car.km //Deleta propriedade
console.log(car)


// 07- MAIS SOBRE OBJETOS
const obj = {
    a: 'teste',
    b: Boolean,
}

console.log(obj instanceof Object)


const obj2 = {
    c: [],
}

Object.assign(obj2,obj)
console.log(obj2)

// 08- CONHECENDO MELHOR OS OBJETOS 
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))


// 09- MUTAÇÃO
const a = {
    name: 'Henrique',
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 31


console.log(a)
console.log(b)


delete b.age
console.log(a)
console.log(b)