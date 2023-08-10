let valorPossuido = 80;
let valorTotalTenis = 129.99;

let valorDesconto = (valorPossuido * 100) / valorTotalTenis;
valorDesconto = valorDesconto.toFixed(2);

console.log(`O Total do desconto deverá ser de ${valorDesconto}%`);