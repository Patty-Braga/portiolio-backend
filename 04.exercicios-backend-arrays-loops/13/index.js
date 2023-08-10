//const disjuntores = [false, false, true, false, false, true, false, false];
const disjuntores = [false, true, true, false, false, true, false, false, true, true];

const disjLigados = []

for (i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i] === true) {
        disjLigados.push(i);
    }

}

console.log(disjLigados);