const express = require('express');
const recurso = require('./controladores/recursos');

const rotas = express();

rotas.get('/livros', recurso.colecaoDeLivros);
rotas.get('/livros/:id', recurso.buscaLivro);
rotas.post('/livros', recurso.adicionaLivros);
rotas.put('/livros/:id', recurso.substituiLivro);
rotas.patch('/livros/:id', recurso.alteraLivro);
rotas.delete('/livros/:id', recurso.removeLivro);

module.exports = rotas;