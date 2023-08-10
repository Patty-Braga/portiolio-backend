const jogada1 = "pedra"
const jogada2 = "tesoura"

if (jogada1 == "pedra" && jogada2 == "tesoura" || jogada1 == "tesoura" && jogada2 == "papel" || jogada1 == "papel" && jogada2 == "pedra") {

    console.log(`Vitória do Jogador 1: ${jogada1}!`)

} else if (jogada2 == "pedra" && jogada1 == "tesoura" || jogada2 == "tesoura" && jogada1 == "papel" || jogada2 == "papel" && jogada1 == "pedra") {

    console.log(`Vitória do Jogador 2: ${jogada2}!`)

} else {
    console.log("Empate!")
}

