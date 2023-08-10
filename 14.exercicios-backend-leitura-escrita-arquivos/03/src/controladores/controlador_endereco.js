const { buscarEndereco } = require('utils-playground');
const fs = require('fs/promises');

const listarEndereco = async (req, res) => {
    const { cep } = req.params;
    const buscaendereco = await buscarEndereco(cep);

    if (!buscaendereco || !buscaendereco.cep) {
        return res.status(404).json('CEP inválido');
    }

    try {
        const salvaEndereco = await fs.readFile('./src/enderecos.json');
        const parseEnderecos = JSON.parse(salvaEndereco);

        parseEnderecos.push({
            cep: buscaendereco.cep,
            logradouro: buscaendereco.logradouro,
            complemento: buscaendereco.complemento,
            localidade: buscaendereco.localidade,
            uf: buscaendereco.uf,
            ibge: buscaendereco.ibge,
            gia: buscaendereco.gia,
            ddd: buscaendereco.ddd,
            siafi: buscaendereco.siafi
        })

        await fs.writeFile('./src/enderecos.json', JSON.stringify(parseEnderecos));

        return res.status(200).json(buscaendereco)

    } catch (erro) {

        return res.status(500).json(`Erro detectado: ${erro.message}`);

    }
}


module.exports = {
    listarEndereco,
}