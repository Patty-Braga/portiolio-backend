let livros = require('../dados/biblioteca');

const colecaoDeLivros = (req, res) => {
    return res.status(200).json(livros)
}

const buscaLivro = (req, res) => {
    const { id } = req.params;

    if (Number(id) <= 0) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido' })
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (Number(id) > livros.length) {
        return res.status(400).json({ mensagem: 'Não existe livro para o ID informado' })
    }

    return res.status(200).json(livro)
}

const adicionaLivros = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ mensagem: 'um ou mais campos obrigatórios não foram preenchidos.' })
    }

    const livro = {
        id: livros.length + 1,
        titulo,
        autor,
        ano,
        numPaginas
    }
    livros.push(livro);

    return res.status(201).send();
}

const substituiLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ mensagem: 'um ou mais campos obrigatórios não foram preenchidos.' });
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livro) {
        return res.status(404).json({ mensagem: "Não existe livro a ser substituído para o ID informado." })
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    return res.status(200).json({ mensagem: "Livro substituído." });
}

const alteraLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livro) {
        return res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." })
    }

    if (titulo) {
        livro.titulo = titulo;
    }
    if (autor) {
        livro.autor = autor;
    }
    if (ano) {
        livro.ano = ano;
    }
    if (numPaginas) {
        livro.numPaginas = numPaginas;
    }

    return res.status(200).json({ mensagem: "Livro alterado." });
}

const removeLivro = (req, res) => {
    const { id } = req.params;

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livro) {
        return res.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." })
    }

    livros = livros.filter((livro) => {
        return livro.id !== Number(id);
    });

    return res.status(200).json({ mensagem: "Livro removido." })
}

module.exports = {
    colecaoDeLivros,
    buscaLivro,
    adicionaLivros,
    substituiLivro,
    alteraLivro,
    removeLivro
}