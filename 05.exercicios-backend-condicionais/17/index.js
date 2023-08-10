//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 800;



if (valorDoProduto > valorPago) {

    const valorRestantes = (valorDoProduto - valorPago).toFixed(2);
    const parcelasRestantes = quantidadeDoParcelamento - ((valorPago * quantidadeDoParcelamento) / valorDoProduto);
    const parcela = (parcelasRestantes === 1 ? "parcela" : "parcelas");
    const resta = (parcelasRestantes === 1 ? "Resta" : "Restam");

    console.log(`${resta} ${parcelasRestantes} ${parcela} de R$${valorRestantes}`)

} else {
    console.log("Produto quitado!")
}