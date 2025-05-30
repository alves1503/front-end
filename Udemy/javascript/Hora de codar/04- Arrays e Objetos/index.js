/* // 01-  ARRAYS
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

Object.assign(obj2, obj)
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

// 10- LOOP EM ARRAY    
const users = ['Alves', 'Souza', 'Oliveira']

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

// 11- PUSH E POP
const array = ['a', 'b', 'c']

array.push('d')
console.log(array)
console.log(array.length)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

// 11- SHIIFT E UNSHIFT


const letters = ['a', 'b', 'c']
const letter = letters.shift()
console.log(letter)
console.log(letters)

letters.unshift =('Add', 'Ttt')
console.log(letters) */

// 12- INDEXOF E LASTINDEXOF
const myElements = ['Abacate', 'Pera', 'Uva', 'Abacate']

console.log(myElements.indexOf('Pera'))
console.log(myElements.indexOf('Abacate'))


console.log(myElements[0])
console.log(myElements[myElements.indexOf('Abacate')])

console.log(myElements.lastIndexOf('Abacate'))

// 14- SLICE
const testSlice = ['a', 'b', 'c', 'd', 'e']
const subArray = testSlice.slice(2, 4)

console.log(subArray)
console.log(testSlice)

const subArray2 = testSlice.slice(2, 4 + 1)
console.log(subArray2)

const subArray3 = testSlice.slice(10, 20)
console.log(subArray3)

const subArray4 = testSlice.slice(2)
console.log(subArray4)


// 15- FOREACH 
const num = [1, 2, 3, 4, 5]

num.forEach((numero) => {
    console.log(`O número é: ${numero}`)
})

const post = [
    { title: 'Primeiro post', category: 'Php' },
    { title: 'Segundo post', category: 'Javascript' },
    { title: 'Terceiro post', category: 'Java' },
]

post.forEach((post) => {
    console.log(`Exibindo post ${post.title} da categoria ${post.category}`)
})

// 16- INCLUDES 
const brands = ['BMW', 'Gol']

console.log(brands.includes('Gol')) //true
console.log(brands.includes("Kia")) //flase

if (brands.includes('BMW')) {
    console.log('Há carros da marca BMW')
}

// 17- REVERSE 
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest)