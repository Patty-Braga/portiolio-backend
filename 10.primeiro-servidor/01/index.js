//const lodash = require('lodash');
const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let indexJogador = 0;

app.get('/', (req, res) => {
    if (indexJogador === jogadores.length) {
        indexJogador = 0;
    }
    res.send(`É a vez de ${jogadores[indexJogador]} jogar!`)
    indexJogador++;
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
}); 