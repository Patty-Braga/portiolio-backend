const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const resultado1 = palavras.some((palavra) => {
    return palavra === 'cerveja'
});

const resultado2 = palavras.some((palavra) => {
    return palavra === 'vodka'
});

if (resultado1 === true || resultado1 === true) {
    console.log("Revise sua lista, João. possui bebida com venda proibida!");
} else {
    console.log("Tudo certo, vamos as compras!");
}



//console.log(resultado1)
//console.log(resultado2)