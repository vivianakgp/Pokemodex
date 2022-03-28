import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function PokemonDetail() {
    const [ pokemonDetail , setPokemonDetail ] = useState({})
    const { name } = useParams();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(res =>{
                console.log(res.data);
                setPokemonDetail(res.data);
            })
    },[ name ])
    return (
    <div className='PokemonDetail'>
        <h2>details</h2>
        <p>{`Seleccionaste el usuario con el id: ${name}`} </p>
        <h2>{pokemonDetail.name}</h2>
        
    </div>
    );
}
export default PokemonDetail;