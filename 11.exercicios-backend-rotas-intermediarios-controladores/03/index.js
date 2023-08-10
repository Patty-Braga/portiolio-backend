const express = require('express');
const app = express();
const { rotImoveis, rotBuscaImoveis } = require('./roteador')

app.use(rotImoveis);
app.use(rotBuscaImoveis);

app.listen(8000)