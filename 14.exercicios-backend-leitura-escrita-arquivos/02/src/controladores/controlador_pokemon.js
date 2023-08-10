const { listarPokemons, detalharPokemon } = require('utils-playground')


const listaDePokemons = async (req, res) => {
    const lista = await listarPokemons()
    try {
        return res.json(lista.results)
    } catch (erro) {
        return res.status(400).json(`Deu erro: ${erro.message}`);
    }
}

const pokemonID = async (req, res) => {
    const { id } = req.params
    const listaDetalhada = await detalharPokemon(id)
    try {
        const resultado = {
            id: listaDetalhada.id,
            name: listaDetalhada.name,
            height: listaDetalhada.height,
            weight: listaDetalhada.weight,
            base_experience: listaDetalhada.base_experience,
            forms: listaDetalhada.forms,
            abilities: listaDetalhada.abilities,
            species: listaDetalhada.species
        }

        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(400).json(`Deu erro: ${erro.message}`);
    }
}

module.exports = {
    listaDePokemons,
    pokemonID
}