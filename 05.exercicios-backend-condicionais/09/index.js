const nota = 7;

if (nota >= 9 && nota <= 10) {
    notaAtual = "A"
    console.log(`O estudante obteve conceito ${notaAtual}`)
} else if (nota >= 8 && nota <= 8.9) {
    notaAtual = "B"
    console.log(`O estudante obteve conceito ${notaAtual}`)
} else if (nota >= 6 && nota <= 7.9) {
    notaAtual = "C"
    console.log(`O estudante obteve conceito ${notaAtual}`)
} else if (nota >= 4 && nota <= 5.9) {
    notaAtual = "D"
    console.log(`O estudante obteve conceito ${notaAtual}`)
} else if (nota < 4) {
    notaAtual = "E"
    console.log(`O estudante obteve conceito ${notaAtual}`)
} else {
    console.log("Conceito inválido, digite novamente")
}

