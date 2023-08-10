const express = require('express');
const controladorPokemon = require('./controladores/controlador_pokemon')

const rotas = express();

rotas.get('/pokemons', controladorPokemon.listaDePokemons);
rotas.get('/pokemons/:id', controladorPokemon.pokemonID);

module.exports = rotas;