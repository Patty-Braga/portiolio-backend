const express = require('express');
const enderecos = require('./controladores/controlador_endereco')

const rotas = express();


rotas.get('/enderecos/:cep', enderecos.listarEndereco);


module.exports = rotas;