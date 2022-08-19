import React from "react";

const PokemonSelector = ({ pokemons, onPokemonSelected }) => {

    const pokemonSelections = pokemons.map((pokemon, index) => {

        return <option value={index} key={index}>{pokemon.name}</option>
    }) 

    const handleChange = (event) =>{
        const chosenPokemon = pokemons [event.target.value];
        onPokemonSelected(chosenPokemon)
    }

    return(
        <select className="selector" defaultValue="" onChange={handleChange}>
        <option value=""> Choose a Pokemon</option>

        {pokemonSelections}

        </select>


        )
}






export default PokemonSelector;