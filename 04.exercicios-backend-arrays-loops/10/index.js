const numeros = [8, 11, 4, 1];

let numMaior = numeros[0];
let numMenor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < numMaior) {
        numMaior = numeros[i]
    }
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numMenor) {
        numMenor = numeros[i]
    }
}
