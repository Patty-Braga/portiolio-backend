const letras = ["A", "a", "B", "C", "E", "e"];

let contador = 0;

for (let quantosEs of letras) {
    if (quantosEs === 'E' || quantosEs === 'e') {
        contador += 1
    }
}

if (contador > 0) {
    console.log(`Existem ${contador} letras 'E' ou 'e'.`)
} else {
    console.log(`Não há letras 'E' ou 'e'.`)
}