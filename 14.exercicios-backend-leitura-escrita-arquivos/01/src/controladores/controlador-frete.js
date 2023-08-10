const produtos = require('../bancodedados/produtos.js');
const { getStateFromZipcode } = require('utils-playground');

const calculaFrete = async (req, res) => {
    const { idProduto, cep } = req.params;
    let frete = 0

    let estado = await getStateFromZipcode(cep).then(uf => {
        return uf;
    })

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    })
    try {
        //seleciona o produto comprado por id
        if (Number(idProduto) <= 0) {
            return res.status(400).json({ mensagem: 'A ID deverá ser um número válido' })
        }

        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' })
        }
    } catch (erro) {
        return res.status(500).json(`Erro detectado: ${erro.message}`);
    }

    //seleciona o estado pelo CEP
    try {


        if (!estado) {
            return res.status(404).json({ mensagem: 'CEP inválido' })
        }

    } catch (erro) {
        return res.status(500).json(`Erro detectado: ${erro.message}`);
    }
    //faz o cálculo do frete
    try {

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

    } catch (erro) {
        return res.status(500).json(`Erro detectado: ${erro.message}`);
    }
}


module.exports = {
    calculaFrete,
}