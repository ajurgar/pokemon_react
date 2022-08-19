import React from "react";
import Pokemon from "./Pokemon";


const PokemonList = ({ pokemonList }) => {

    const pokemons = pokemonList.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} key={index} />
    })

    return (
        <div>
                {pokemons}
    
        </div>
         


    )
}




export default PokemonList;