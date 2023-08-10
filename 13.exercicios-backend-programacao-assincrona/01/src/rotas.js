const express = require('express');
const controlaProduto = require('./controladores/controlador-produtos');
const controlaFrete = require('./controladores/controlador-frete')

const rotas = express();

rotas.get('/produtos', controlaProduto.listarProdutos);
rotas.get('/produtos/:idProduto', controlaProduto.detalharProduto);
rotas.get('/produtos/:idProduto/frete/:cep', controlaFrete.calculaFrete);


module.exports = rotas;