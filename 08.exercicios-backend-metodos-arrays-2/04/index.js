const numeros = [0, 122, 4, 6, 7, 8, 44]

const ehPar = numeros.map((numero) => {
    return numero % 2
});

let contador = 0
for (let cont of ehPar) {
    if (cont === 1) {
        contador++
    }
}

if (contador === 0) {
    console.log('array válido');
} else {
    console.log('array inválido');
}

//console.log(ehPar);