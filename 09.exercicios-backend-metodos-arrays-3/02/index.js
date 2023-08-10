const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const resultado = cidades.reduce((acumulador, valorAtual) => {
    let maiorCaracter = acumulador;

    if (valorAtual.length > maiorCaracter.length) {
        maiorCaracter = valorAtual;
    }
    return maiorCaracter
})

console.log(resultado);