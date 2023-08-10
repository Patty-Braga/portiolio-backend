const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

const menorNumero = [];

contador = 0

while (contador < arrayA.length) {

    if (arrayA[contador] < arrayB[contador]) {
        menorNumero.push(arrayA[contador])
    } else {
        menorNumero.push(arrayB[contador])
    }
    contador++
}


console.log(menorNumero);