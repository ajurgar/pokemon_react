import React from "react";
import './card.css';
import pokemonType from '../helpers/pokemonTypes'


const PokemonDetail = ({ pokemon, index }) => {


    return (
        <>

<div className="poke__img" key={index}>
                <img src={pokemon.sprites.front_default} />
            </div>

        <div className="Card">

            <div className="poke_name">
                <h2>{pokemon.name}</h2>
                </div>
                <div className="poke_type">
                    {
                        pokemon.types.map((type,index) => {
                            return (
                                <div className="Card_type" key={index} style={{ backgroundColor: pokemonType[type.type.name]}}>
                                    {type.type.name}
                                </div>
                            )
                        })

                    }
                </div>

            <div className="card_info">
                    <div className="Card_data Card_data--weight">
                        <p className="title">Weight</p>
                        <p>{pokemon.weight}</p>

                    </div>
                    <div className="Card_data Card_data--height">
                        <p className="title">Height</p>
                        <p>{pokemon.height}</p>
                    </div>
                    <div className="Card_data Card_data--ability">
                        <p className="title">Ability</p>
                        <p>{pokemon.abilities[0].ability.name}</p>
                    </div>




                </div>


        </div>
        </>
    )
}


export default PokemonDetail;