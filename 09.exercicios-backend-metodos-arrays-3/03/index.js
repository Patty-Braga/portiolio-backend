const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const resultado = numeros.reduce((acumulador, valorAtual) => {
    let maiorCaracter = acumulador;

    if (valorAtual > maiorCaracter) {
        maiorCaracter = valorAtual;
    }
    return maiorCaracter
})

console.log(resultado);