let { alunos } = require('../dados/alunos');

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos)
}

const obterAluno = (req, res) => {
    const { id } = req.params;

    if (Number(id) <= 0) {
        return res.status(400).json({ mensagem: 'A ID deverá ser um número válido' })
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' })
    }

    return res.status(200).json(aluno)
}

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'um ou mais campos obrigatórios não foram preenchidos.' })
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'aluno deve ser maior de 18 anos.' })
    }

    if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
        return res.status(400).json({ mensagem: 'um ou mais campos possuem apenas espaços.' })
    }
    const aluno = {
        id: alunos.length + 1,
        nome,
        sobrenome,
        idade,
        curso
    }
    console.log(alunos);
    alunos.push(aluno);

    return res.status(201).send()
}

const excluirAluno = (req, res) => {
    const { id } = req.params;
    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'O Aluno não existe.' })
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id);
    });


    return res.status(200).json(aluno)
}

module.exports = {
    listarAlunos,
    obterAluno,
    cadastrarAluno,
    excluirAluno
}