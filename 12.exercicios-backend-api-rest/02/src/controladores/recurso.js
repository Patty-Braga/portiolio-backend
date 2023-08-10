let convidados = require('../dados/listadeconvidados');

const listarConvidados = (req, res) => {
    return res.status(200).json(convidados)
}


const verificarConvidadoPresente = (req, res) => {
    const { nome } = req.query;

    const verificaNomes = convidados.find((convidado) => {
        return nome === convidado
    })
    if (nome === verificaNomes) {
        return res.status(200).json({ mensagem: "Convidado presente." });
    } else {
        return res.status(404).json({ mensagem: "O convidado buscado não está presente na lista." });
    }
}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    const verificaNomes = convidados.find((convidado) => {
        return nome === convidado
    })

    if (nome !== verificaNomes) {
        convidados.push(nome);
        return res.status(200).json({ mensagem: "Convidado adicionado." });
    } else {
        return res.status(404).json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });
    }
}

const removerCandidato = (req, res) => {
    const { nome } = req.params;

    const convidado = convidados.find((convidado) => {
        return nome === convidado
    })

    if (!convidado) {
        return res.status(404).json({ mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.' })
    }

    convidados = convidados.filter((convidado) => {
        return convidado !== nome;
    });

    return res.status(200).json({ mensagem: 'Convidado removido' })
}

module.exports = {
    listarConvidados,
    verificarConvidadoPresente,
    adicionarConvidado,
    removerCandidato
}