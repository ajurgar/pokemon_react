import React, { useEffect, useState } from "react";
import PokemonDetail from "../components/PokemonDetail";
import PokemonSelector from "../components/PokemonSelector";
import './PokemonContainer.css'
import { getAllPokemons } from "../components/Services/fetchPokemon";
import { getPokemon } from "../components/Services/fetchPokemon";


const PokemonContainer = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [loading, setLoading] = useState(true)
    const initialUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    const navImage = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    const pokedexImage = "https://www.kindpng.com/picc/m/541-5418191_original-pokedex-hd-png-download.png"


    useEffect(() => {
        async function fecthData() {
            let response = await getAllPokemons(initialUrl);
            await loadingPokemon(response.results);
            setLoading(false)
        };
        fecthData()
    }, [])

    const onPokemonSelected = (pokemon) => {
        setPokemonSelected(pokemon);
    }

    const loadingPokemon = async (data) => {
        let _pokemon = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord

        }))

        setPokemonData(_pokemon)
    }







    return (
        <>

            <div className="img">
                <img src={navImage} alt="pokeapi-logo" className="image"></img>
            </div>

            <nav className="nav">
                <PokemonSelector pokemons={pokemonData} onPokemonSelected={onPokemonSelected} />
            </nav>

            <div className="grid-container">
                {pokemonSelected ? <PokemonDetail pokemon={pokemonSelected} /> : <img src={pokedexImage} alt="pokedex" className="pokedex"></img>
}
                

            </div>



        </>
    )
}

export default PokemonContainer;