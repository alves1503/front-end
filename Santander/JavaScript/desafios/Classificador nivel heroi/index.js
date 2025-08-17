const nomeDoHeroi = "Henrique"
const QuantidadeDeXp =  10900
let nivelXp

if (QuantidadeDeXp < 1000) {
    nivelXp = "Ferro"
} else if (QuantidadeDeXp < 2000) {
    nivelXp = "Bronze"
} else if (QuantidadeDeXp < 5000) {
    nivelXp = "Prata"
} else if (QuantidadeDeXp < 8000) {
    nivelXp = "Platina Diamante"
} else if (QuantidadeDeXp < 9000) {
    nivelXp = "Ascedente"
} else if (10000) {
    nivelXp = "Imortal"
} else {
    nivelXp = "Radiante"
}


console.log(`O heroi de nome ${nomeDoHeroi} esta no nivel de ${nivelXp}`)