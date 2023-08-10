const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let parImpar of original) {
    if (parImpar % 2 === 0) {
        pares.push(parImpar)
    } else {
        impares.push(parImpar)
    }
}

console.log(pares)
console.log(impares)