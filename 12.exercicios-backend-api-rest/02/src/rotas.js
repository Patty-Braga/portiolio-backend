const express = require('express');
const recurso = require('./controladores/recurso');

const rotas = express();

rotas.get('/convidados', recurso.listarConvidados);
rotas.get('/convidado', recurso.verificarConvidadoPresente);
rotas.post('/convidados', recurso.adicionarConvidado);
rotas.delete('/convidados/:nome', recurso.removerCandidato);

module.exports = rotas;