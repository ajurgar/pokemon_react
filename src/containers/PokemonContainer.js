import React, { useEffect, useState } from "react";
import PokemonDetail from "../components/PokemonDetail";
import PokemonSelector from "../components/PokemonSelector";
import './PokemonContainer.css'


const PokemonContainer = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);

    useEffect(() => {
        getPokemons();
    }, [])

    const onPokemonSelected = (pokemon) =>{
setPokemonSelected(pokemon);
    }
    


    const getPokemons = function () {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
            .then(res => res.json())
            .then(poke => setPokemonList(poke.results))
    }



    return (

        <div className="container">

            {/* <PokemonList pokemonList={pokemonList} /> */}
            <PokemonSelector pokemons = {pokemonList} onPokemonSelected ={onPokemonSelected}/>
            {pokemonSelected ? <PokemonDetail pokemon={pokemonSelected}/> : null}



        </div>

    )
}

export default PokemonContainer;