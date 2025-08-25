function suaIdade(idade) {
  if (idade < 18) {
    return 'Menor de idade';
  } else {
    return 'Maior de idade ';
  }
}



function main() {
    const idade = 17
    ;
    console.log(suaIdade(idade))
}

main()
