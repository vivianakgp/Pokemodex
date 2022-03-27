import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// 'https://pokeapi.co/api/v2/ability/40/'
// https://pokeapi.co/api/v2/berry/{id or name}/

function PokemonDetail() {
    const [ pokemonDetail , setPokemonDetail ] = useState({})
    const { name } = useParams();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/berry/${name}/`)
            .then(res =>{
                console.log(res.data);
                setPokemonDetail(res.data);
            })
    },[ name ])
    return (
    <div className='PokemonDetail'>
        <h2>404 page not found</h2>
        <p>Seleccionaste el usuario con el id {name}</p>
        <h2>{pokemonDetail.name}</h2>
        
    </div>
    );
}
export default PokemonDetail;