const { listarPokemons, detalharPokemon } = require('utils-playground')


const listaDePokemons = async (req, res) => {
    const lista = await listarPokemons()
    return res.json(lista.results)
}

const pokemonID = async (req, res) => {
    const { id } = req.params
    const listaDetalhada = await detalharPokemon(id)

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
}

module.exports = {
    listaDePokemons,
    pokemonID
}