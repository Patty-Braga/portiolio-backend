const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesIniciaComA = [];

for (let i of nomes) {
    if (i[0] === "A" || i[0] === "a") {
        nomesIniciaComA.push(i)

    }

}

console.log(nomesIniciaComA);
