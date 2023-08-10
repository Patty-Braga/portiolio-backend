const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

//deixa toda a string em minúsculo
const frutasEmMinusculo = frutas.map((fruta) => {
    return fruta.toLowerCase();
})

//deixa a primeira letra maiúscula e add index
const frutasComPrimeiraLetra = frutasEmMinusculo.map((fruta, index) => {
    return `${index} - ${fruta[0].toUpperCase() + fruta.substring(1)}`;
})


console.log(frutasComPrimeiraLetra);