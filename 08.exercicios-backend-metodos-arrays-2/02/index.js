const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const contadorDeLetras = (palavra) => {
    const resultado = palavra.find((qtdLetras) => {
        return qtdLetras.length > 5;
    });
    if (resultado !== undefined) {
        console.log("Existe palavra inválida");
    } else {
        console.log("Array validada");

    }
    //console.log(resultado);
}

contadorDeLetras(palavras);