let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

// identificador com 6 digitos
const identFormatado = identificador.padStart(6, "0");
console.log(identFormatado)

//nome sempre iniciado com letra maiuscula
let arrayDeNome = nome.split(" ");
let nomeFormatado = "";
for (let i of arrayDeNome) {
    //transforma a inicial de cada item em maiuscula
    let primeiraLetra = i.slice(0, 1);
    let restanteNome = i.slice(1);
    nomeFormatado += primeiraLetra.toUpperCase() + restanteNome + " ";
}
console.log(nomeFormatado);

// e-mail sem espaços em branco
emailFormatado = email.trim();
console.log(emailFormatado);