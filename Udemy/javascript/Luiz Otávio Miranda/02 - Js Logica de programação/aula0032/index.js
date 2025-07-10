/* let a = 'A' //B
let b = 'B' //C
let c = 'C' //A


const num = [b, c, a];
[a, b, c] = num;

console.log(a, b, c); */



const num = [100, 277, 3, 4, 5, 6, 7, 8, 9]
const [primeroNum, segundoNum, ...resto] = num
console.log(primeroNum,segundoNum)
console.log(resto)

