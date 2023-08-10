const express = require('express');
const recurso = require('./controladores/recurso');

const rotas = express();

rotas.get('/alunos', recurso.listarAlunos);
rotas.get('/alunos/:id', recurso.obterAluno);

rotas.post('/alunos', recurso.cadastrarAluno);
rotas.delete('/:id', recurso.excluirAluno);

module.exports = rotas;