const express = require('express');
const { vezDeJogar, remover, adicionar } = require('./bancodedados');

const app = express()

app.get('/', vezDeJogar);

app.get('/remover/', remover);

app.get('/adicionar/', adicionar);

app.listen(8000);