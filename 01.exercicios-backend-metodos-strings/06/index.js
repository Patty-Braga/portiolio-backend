const celular = "71999918888";

let ddd = "";
let digito = "";
let inicioCel = "";
let finalCel = "";

ddd = "(" + celular.slice(0, 2) + ")";
digito = " " + celular.slice(2, 3) + " ";
inicioCel = celular.slice(3, 7) + "-";
finalCel = celular.slice(celular.length - 4);

if (celular.length === 11) {
    console.log(ddd + digito + inicioCel + finalCel);
} else if (celular.length === 9) {
    console.log(digito + inicioCel + finalCel);
} else {
    console.log("Número inválido");
}