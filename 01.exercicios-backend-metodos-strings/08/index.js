const cpf = "011.022.033-44";

function removeCaracter() {
    cpfFormatado1 = "";
    cpfFormatado2 = "";
    for (let caracter of cpf) {
        if (!caracter.includes(".")) {
            cpfFormatado1 += caracter
        }
    }
    for (let caracter of cpfFormatado1) {
        if (!caracter.includes("-")) {
            cpfFormatado2 += caracter
        }
    }
    console.log(cpfFormatado2);
}

removeCaracter(cpf);

// Crie uma função que receba um número de CPF ou CNPJ e remova toda pontuação. A função deverá imprimir o resultado.

// const cpf = "011.022.033-44";
// Para o exemplo acima deverá imprimir:

// 01102203344
// Faça o teste com outros exemplos.

// Faça commit do resultado.