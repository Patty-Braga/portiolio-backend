const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

let QtdFilaDeDentro = filaDeDentro.length;

while (QtdFilaDeDentro <= 4) {
    for (let podeEntrar of filaDeFora) {
        QtdFilaDeDentro++
        filaDeDentro.push(podeEntrar)
        filaDeFora.pop()
        break
    }

}

let QtdFilaDeFora = filaDeFora.length;

const pessoa = (filaDeDentro.length === 1 ? "pessoa" : "pessoas");
const pessoa2 = (filaDeFora.length === 1 ? "pessoa" : "pessoas");

console.log(`Há ${QtdFilaDeDentro} ${pessoa} na fila de dentro e ${QtdFilaDeFora} ${pessoa2} na fila de fora`)