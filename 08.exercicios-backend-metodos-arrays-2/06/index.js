const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const cidadesAtualizadas = cidades.filter((cidade) => {
    return cidade.length <= 8;
})

console.log(cidadesAtualizadas);

let cidadesFormatadas = cidadesAtualizadas.join(", ");

console.log(cidadesFormatadas);