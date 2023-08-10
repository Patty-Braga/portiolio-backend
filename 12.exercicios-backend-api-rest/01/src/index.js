const express = require('express');
const rotas = require('./rotas');
const validarSenhas = require('./intermediarios')

const app = express();

app.use(validarSenhas);
app.use(express.json())
app.use(rotas);

app.listen(3000)