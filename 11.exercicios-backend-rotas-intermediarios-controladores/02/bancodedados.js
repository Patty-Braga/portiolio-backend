const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];


let indexJogador = 0;
const vezDeJogar = (req, res) => {
    if (indexJogador === jogadores.length) {
        indexJogador = 0;
    }
    res.send(`É a vez de ${jogadores[indexJogador]} jogar!`)
    indexJogador++;
}

const remover = (req, res) => {
    const { indice } = req.query
    let resultado = jogadores

    if (indice) {
        jogadores.splice(indice, 1)
        res.send(jogadores)

    } else {
        res.send(`Não existe jogador no índice  informado (${indice}) para ser removido.`)
    }

}

const adicionar = (req, res) => {
    const { nome, indice } = req.query
    let resultado = jogadores
    let nomeFormatado = nome[0].toUpperCase() + nome.slice(1)

    if (!indice) {
        resultado.push(nomeFormatado)
        res.send(resultado)
    } else if (indice >= jogadores.length) {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
    } else {
        jogadores.splice(indice, 0, nomeFormatado)
        res.send(jogadores)
    }

}

module.exports = { vezDeJogar, remover, adicionar }