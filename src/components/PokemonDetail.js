import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {backgroundAccordingToType} from '../utilities/cardsBackground';
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
    const pokemonType = pokemonDetail.types?.[0].type.name;

    return (
    <div className='pokemonDetail'>
        <Header />
        <div className='content'>
            <div className='banner' style={{background:backgroundAccordingToType(pokemonType)}}>
                <div className='containerImage'>
                    <div><img src={pokemonDetail.sprites?.front_default} alt=''/></div>
                </div>
            </div>
            <section className='mainInfo'>
                <p>{pokemonDetail.id}</p>
                <h1>{pokemonDetail.name}</h1>
                <div>
                    <sapn>
                        <p>Peso</p>
                        <sapn>{pokemonDetail.height}</sapn>
                    </sapn>
                    <sapn>
                        <p>Altura</p>
                        <sapn>{pokemonDetail.weight}</sapn>
                    </sapn>
                </div>
            </section>
            <section className='sec stats'></section>
            <section  className='sec moments'></section>
        </div>
    </div>
    );
}
export default PokemonDetail;