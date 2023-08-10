const express = require('express');
const app = express();
const { totalImoveis, buscaImoveis } = require('./controladores/imoveis')

const rotImoveis = app.get('/imoveis', totalImoveis);

const rotBuscaImoveis = app.get('/imoveis/:id', buscaImoveis);

module.exports = { rotImoveis, rotBuscaImoveis }