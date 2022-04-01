
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import {backgroundAccordingToType, colorAccordingToType} from '../utilities/cardsBackground';



function PokemonCards({pokeUrl}) {
    const [ pokemon, setPokemon ] = useState({});
    useEffect(()=>{
        axios.get(pokeUrl).then(res => {
                // console.log(res.data);
                setPokemon(res.data)
            })
    },[ pokeUrl ]);
    // const lengthName = pokemon.name.length; front_shiny front_default
    const pokemonType = pokemon.types?.[0].type.name;
    console.log(pokemon.name?.length)
    const shortName = () => {
        if(pokemon.name?.length <= 11) {
            return '.8em'
        } else {
            return'.6em'
        }
    }
    return (
    <div className='PokemonCard' style={{background:backgroundAccordingToType(pokemonType)}}>
        <Link style={{textDecoration: 'none'}} to={`/pokedex/${pokemon.name}`} >
            <div className='containerImg' >
                <img src={pokemon.sprites?.front_default} alt='pokemon'/>
            </div>
            <div className='containerInfo'  style={{color:colorAccordingToType(pokemonType)}} >
                <h2 style={{fontSize:shortName()}}>{pokemon.name}</h2>
                {/* style={{fontSize:shortName()}} */}
                <h3>{pokemonType}</h3>
                <p>TIPO</p>
                <p className='secStats borderTop'>
                    <span>
                        <span>HP</span>
                        <h4>{pokemon.stats?.[0].base_stat}</h4>
                    </span>
                    <span>
                        <span>ATAQUE</span>
                        <h4>{pokemon.stats?.[1].base_stat}</h4>
                    </span>
                </p>
                <p className='secStats'>
                    <span>
                        <span>DEFENSA</span>
                        <h4>{pokemon.stats?.[2].base_stat}</h4>
                    </span>
                    <span>
                        <span>VELOCIDAD</span>
                        <h4>{pokemon?.stats?.[5].base_stat}</h4>
                    </span>
                </p>
            </div>
        </Link>
    </div>
    );
}

export default PokemonCards;