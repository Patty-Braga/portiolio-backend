//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 20;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (rendaMensalEmCentavos >= 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno < 1800000) {

    const dezoitoPorCento = ((rendaMensalEmCentavos * 18) / 10000).toFixed(2)
    console.log(`O valor da parcela deste mês é de R$${dezoitoPorCento}`)

} else if (rendaMensalEmCentavos < 200000) {

    console.log(`Sua renda não atingiu o valor mínimo para pagamento de parcela.`)

} else if (mesesDecorridos > 60) {

    console.log(`Você já pagou 60 parcelas. Independente do total pago, considere sua divida quitada!.`)

} else {

    console.log(`Você já pagou um total de R$18.000,00. Considere sua dívida quitada!.`)

}

