/* let frutas = ["Banana", "Abacate", "Pera"]

for(let fruta of frutas) {
    console.log(fruta)
}
 */
let pessoa = {nome:"Henrique",idade:"20",sexo:"Masculino"}

for(let key in pessoa){
    console.log(`${key}:${pessoa[key]}`)
}