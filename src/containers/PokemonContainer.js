import React, { useEffect, useState } from "react";
import PokemonDetail from "../components/PokemonDetail";
import PokemonSelector from "../components/PokemonSelector";
import './PokemonContainer.css'


const PokemonContainer = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [loading, setLoading] = useState(true)
    const initialUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"

    useEffect(() => {
        getPokemons();
    }, [])

    const onPokemonSelected = (pokemon) =>{
setPokemonSelected(pokemon);
    }
    


    const getPokemons = function () {
        fetch(initialUrl)
            .then(res => res.json())
            .then(poke => setPokemonList(poke.results))
    }
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"



    return (
<>
<div className="img">
<img src={imageUrl} alt="pokeapi-logo" className="image"></img>
</div>

        <nav className="nav">
        

        

            <PokemonSelector pokemons = {pokemonList} onPokemonSelected ={onPokemonSelected}/>
            {pokemonSelected ? <PokemonDetail pokemon={pokemonSelected}/> : null}



        </nav>
</>
    )
}

export default PokemonContainer;