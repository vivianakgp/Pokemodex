import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

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
    // <h2>{pokemonDetail.name}</h2>

    return (
    <div className='PokemonDetail'>
        <Header />
        {/* <div className='content'>
            <div className='baner'>
                <div className='containerImage'>
                    <div><img src={} alt=''/></div>
                </div>
            </div>
            <section className='sec mainInfo'></section>
            <section className='sec stats'></section>
            <section  className='sec moments'></section>
        </div> */}
    </div>
    );
}
export default PokemonDetail;