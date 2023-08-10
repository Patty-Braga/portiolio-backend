const imoveis = require('../dados/imoveis')

const totalImoveis = (req, res) => {

    let resultado = imoveis
    res.send(resultado)

}

const buscaImoveis = (req, res) => {
    const { id } = req.params
    const imovelEncontrado = imoveis.find((imovel) => {
        return imovel.id === Number(id);
    })
    res.send(imovelEncontrado)
}

module.exports = { totalImoveis, buscaImoveis }