import React from "react";
import './card.css'


const PokemonDetail = ({ pokemon }) => {



    return (
        <div className="Card">

            <div className="poke__img">
                <img src={pokemon.sprites.front_default} />
            </div>

            <div className="poke_name">
                <h2>{pokemon.name}</h2>
            </div>

            <div className="poke_type">
                {   
                    pokemon.types.map(type => {
                        return (
                            <div className="Card_type">
                                {type.type.name}
                            </div>
                        )
                    })

                }
            </div>


        </div>

    )
}


export default PokemonDetail;