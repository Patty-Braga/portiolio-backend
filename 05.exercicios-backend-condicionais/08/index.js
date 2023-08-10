const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 18 || possuiPatologia === true || altura < 180) {

    console.log("ACESSO NEGADO");

} else if (idade >= 12 && idade <= 17 || ehEstudante === true) {

    console.log("R$10,00");

} else if (idade >= 18 || ehEstudante === false) {

    console.log("R$20,00");

}