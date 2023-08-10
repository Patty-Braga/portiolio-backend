const validarSenhas = (req, res, next) => {
    const { senha } = req.query;

    if (!senha || senha !== 'cubos123') {
        return res.send('Senha ñ digitada ou incorreta, tente novamente');
    }
    next();
}

module.exports = validarSenhas