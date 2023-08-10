const express = require('express');
const app = express();

let minutos = 0;
let segundos = 0;
let rodando = true

function iniciar() {
    cronometro = setInterval(() => {
        if (rodando) {
            if (segundos === 59) {
                segundos = 0;
                minutos++
            } else {
                segundos++
            }
        }
    }, 1000)
}

function pausar() {
    clearInterval(cronometro)
}

function zerar() {
    minutos = 0;
    segundos = 0;
}

app.get('/', (requisicao, resposta) => {
    resposta.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${segundos.toString().padStart(2, "0")} segundos`);
});

app.get('/iniciar', (requisicao, resposta) => {
    iniciar();
    resposta.send('Cronômetro iniciado!');
});

app.get('/pausar', (requisicao, resposta) => {
    pausar();
    resposta.send('Cronômetro pausado!');
});

app.get('/continuar', (requisicao, resposta) => {
    iniciar();
    resposta.send('Cronômetro continuando!');
});

app.get('/zerar', (requisicao, resposta) => {
    pausar();
    zerar();
    resposta.send('Cronômetro zerado!');
});

app.listen(8000);