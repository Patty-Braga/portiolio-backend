const original = [5, 7, 13, 17, 26, 34, 118, 245];

let alteracao = []

for (let numerosGuardados of original) {
    if (numerosGuardados >= 10 || numerosGuardados <= 20 || numerosGuardados > 100) {
        alteracao.push(numerosGuardados)
    }
}

console.log(alteracao)