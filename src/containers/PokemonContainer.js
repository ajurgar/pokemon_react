import React, { useEffect, useState } from "react";
import PokemonDetail from "../components/PokemonDetail";
import PokemonSelector from "../components/PokemonSelector";
import './PokemonContainer.css'


const PokemonContainer = () => {

    const [allPokemonData, setAllPokemonData] = useState([]);
    const [selectedPokemonData, setSelectedPokemonData] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const initialUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    const navImage = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    const pokedexImage = "https://www.kindpng.com/picc/m/541-5418191_original-pokedex-hd-png-download.png"

    useEffect(() => {
        fetch(initialUrl)
            .then(res => res.json())
            .then(data => setAllPokemonData(data.results))
    }, [])


    useEffect(() => {
        if (selectedPokemon) {
            const pokemonUrl = selectedPokemon.url
            fetch(pokemonUrl)
                .then(res => res.json())
                .then(data => {
                    setSelectedPokemonData(data)
                });
        }

    }, [selectedPokemon]) 


 

    const onPokemonSelected = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    return (
        <>

            <div className="img">
                <img src={navImage} alt="pokeapi-logo" className="image"></img>
            </div>

            <nav className="nav">
                {allPokemonData ? <PokemonSelector pokemons={allPokemonData} onPokemonSelected={onPokemonSelected} /> : null}
            </nav>

            <div className="grid-container">
                {selectedPokemonData ? <PokemonDetail pokemon={selectedPokemonData} /> : <img src={pokedexImage} alt="pokedex" className="pokedex"></img>
                } 
            </div>
            {/* why not selectedPokemon? */}




        </>
    )
}

export default PokemonContainer;