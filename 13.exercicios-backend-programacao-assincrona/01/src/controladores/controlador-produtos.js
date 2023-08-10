const produtos = require('../bancodedados/produtos.js');

const listarProdutos = (req, res) => {
    return res.status(200).json(produtos)
}

const detalharProduto = (req, res) => {
    const { idProduto } = req.params;

    if (Number(idProduto) <= 0) {
        return res.status(400).json({ mensagem: 'A ID deverá ser um número válido' })
    }

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    })

    if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }

    return res.status(200).json(produto)
}


module.exports = {
    listarProdutos,
    detalharProduto,
}