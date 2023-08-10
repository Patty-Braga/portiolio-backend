//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito ou dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;


if (tipoDePagamento == "credito") {

    const valorComDesconto = ((valorDoProduto - (valorDoProduto * 0.05)) / 100).toFixed(2)
    console.log(`Valor a ser pago: R$${valorComDesconto}`)

} else if (tipoDePagamento == "cheque") {

    const valorComDesconto = ((valorDoProduto - (valorDoProduto * 0.03)) / 100).toFixed(2)
    console.log(`Valor a ser pago: R$${valorComDesconto}`)

} else if (tipoDePagamento == "debito ou dinheiro") {

    const valorComDesconto = ((valorDoProduto - (valorDoProduto * 0.10)) / 100).toFixed(2)
    console.log(`Valor a ser pago: R$${valorComDesconto}`)

}