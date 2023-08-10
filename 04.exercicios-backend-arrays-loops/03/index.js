const numeros = [54, 22, 14, 87, 1, 284, 10];
let encontrado = false;

for (let busca10 of numeros) {
    if (busca10 === 10) {
        console.log(numeros.length);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("-1");
}

