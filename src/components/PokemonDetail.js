import React from "react";
import './PokemonDetail.js'


const PokemonDetail = ({pokemon}) =>{



    return(
<div className="pokemon">
    <h2>{pokemon.name}</h2>
</div>
    )
}


export default PokemonDetail;