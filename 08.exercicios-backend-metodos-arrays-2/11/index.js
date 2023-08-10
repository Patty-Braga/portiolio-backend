const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const nomesFiltrados1 = nomes.find((nome) => {
    return nome[0] === "A"
})

const nomesFiltrados2 = nomes.find((nome) => {
    return nome[0] === "a"
})

let resultado = (`${nomesFiltrados1}, ${nomesFiltrados2}`);
console.log(resultado);