const produtos = require('../bancodedados/produtos.js');
const { getStateFromZipcode } = require('utils-playground');

const calculaFrete = async (req, res) => {
    const { idProduto, cep } = req.params;
    let frete = 0

    //seleciona o produto comprado por id
    if (Number(idProduto) <= 0) {
        return res.status(400).json({ mensagem: 'A ID deverá ser um número válido' })
    }
    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    })

    if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }

    //seleciona o estado pelo CEP
    let estado = await getStateFromZipcode(cep).then(uf => {
        return uf;
    })

    if (!estado) {
        return res.status(404).json({ mensagem: 'CEP inválido' })
    }

    //faz o cálculo do frete
    if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {

        frete = produto.valor * 0.10

    } else if (estado === 'SP' || estado === 'RJ') {

        frete = produto.valor * 0.15

    } else {

        frete = produto.valor * 0.12
    }

    //resultado
    const resultado = {
        produto,
        estado,
        frete
    }

    return res.status(200).json(resultado)
}


module.exports = {
    calculaFrete,
}