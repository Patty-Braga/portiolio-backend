const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];


//a- Ordenar o array numeros em ordem crescente.
numeros.sort((a, b) => {
    return a - b
})
console.log(`Ordem Crescente: ${numeros.join(", ")}`);
console.log();

//b- Ordenar o array numeros em ordem decrescente.
numeros.sort((a, b) => {
    return b - a
})
console.log(`Ordem Decrescente: ${numeros.join(", ")}`);
console.log();

//c- Ordenar o array numeros com base nos valores dos pontos de código Unicode.
numeros.sort()
console.log(`Ordem Unicode: ${numeros.join(", ")}`);
console.log();

//d- Ordenar o array frutas em ordem crescente.
frutas.sort((a, b) => {

    return a.localeCompare(b)
})
console.log(`Ordem Crescente: ${frutas.join(", ")}`);
console.log();

//e- Ordenar o array frutas em ordem decrescente.
frutas.sort((a, b) => {

    return b.localeCompare(a)
})
console.log(`Ordem Decrescente: ${frutas.join(", ")}`);
console.log();

//f- Ordenar o array frutas em ordem crescente de acordo com o número de caracteres. 

frutas.sort((a, b) => {
    if (a.length < b.length) {
        return -1;
    }
    if (b.length < a.length) {
        return 1;
    }
    return 1;
})

console.log(`Ordem Crescente de caracteres: ${frutas.join(", ")}`);