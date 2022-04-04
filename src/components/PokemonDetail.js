import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { backgroundAccordingToType, colorAccordingToType } from '../utilities/cardsBackground';
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
                <p style={{color:colorAccordingToType(pokemonType)}}>#{pokemonDetail.id}</p>
                <div className='h1Container'>
                    <p className='h1Decorection'><hr/></p>
                    <h1 style={{color:colorAccordingToType(pokemonType)}}>{pokemonDetail.name}</h1>
                    <p className='h1Decorection'><hr/></p>
                </div>
                <div className='measures'>
                    <span>
                        <p>Peso</p>
                        <span>{pokemonDetail.height}</span>
                    </span>
                    <span>
                        <p>Altura</p>
                        <span>{pokemonDetail.weight}</span>
                    </span>
                </div>
                <div className='Skills'>
                    <section>
                        <h2>Tipo</h2>
                        <span>{pokemonDetail.types?.[0]?.type.name}</span>
                        <span>{pokemonDetail.types?.[1]?.type.name}</span>
                    </section>
                    <section>
                        <h2>Habilidades</h2>
                        <span>{pokemonDetail.abilities?.[0]?.ability.name}</span>
                        <span>{pokemonDetail.abilities?.[1]?.ability.name}</span>
                    </section>
                </div>
            </section>
            <section className='sec stats'></section>
            <section  className='sec moments'></section>
        </div>
    </div>
    );
}
export default PokemonDetail;