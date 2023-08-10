const express = require('express');
const fs = require('fs/promises');

const app = express();

const ordenaEndereco = async (req, res) => {

    const salvaEndereco = await fs.readFile('./src/dados-empresas.json');
    const parseEnderecos = JSON.parse(salvaEndereco);

    //console.log(parseEnderecos);

    function ordenaEndereco(a, b) {
        const dataA = new Date(a.registered);
        const dataB = new Date(b.registered);

        return dataA - dataB
    }
    parseEnderecos.sort(ordenaEndereco)

    //console.log(parseEnderecos);

    return res.status(200).json(parseEnderecos)
}

app.get('/', ordenaEndereco);


app.listen(3000)