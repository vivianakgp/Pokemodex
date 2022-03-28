
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';



function PokemonCards({pokeUrl}) {
    const [ pokemon, setPokemon ] = useState({});
    useEffect(()=>{
        axios.get(pokeUrl).then(res => {
                console.log(res.data);
                setPokemon(res.data)
            })
    },[pokeUrl])
    return (
    <div className='PokemonCards'>

        <Link to={`/pokedex/${pokemon.name}`}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.back_default} alt='pokemon'/>
        </Link>
    </div>
    );
}

export default PokemonCards;