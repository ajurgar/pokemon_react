import React from "react";
import './PokemonSelector.css'

const PokemonSelector = ({ pokemons, onPokemonSelected }) => {

    const handleChange = function (event) {
        const chosenPokemon = pokemons[event.target.value];
        onPokemonSelected(chosenPokemon)
    };


    const pokemonSelections = pokemons.map((pokemon, index) => {

        return <option value={index} key={index}>{pokemon.name}</option>
    }) 

   
    return(
        <select className="selector" defaultValue="" onChange={handleChange}>
        <option value=""> Select Pokemon</option>

        {pokemonSelections}

        </select>


        )
}






export default PokemonSelector;