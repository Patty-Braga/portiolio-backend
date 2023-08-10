const numeros = [3, 24, 1, 18, 11, 7, 5];
let maiorNumero = 0
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]
    }
}
console.log(maiorNumero)