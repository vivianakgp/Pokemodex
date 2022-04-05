import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { backgroundAccordingToType, colorAccordingToType } from '../utilities/cardsBackground';
import Header from './Header';
import { Chart } from "react-google-charts";

function PokemonDetail() {
    const [ pokemonDetail , setPokemonDetail ] = useState({});
    const { name } = useParams();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(res =>{
                // console.log(res.data);
                setPokemonDetail(res.data);
            })
    },[ name ]);
    const pokemonType = pokemonDetail.types?.[0].type.name;
    const pokemonType2 = pokemonDetail.types?.[1]?.type.name;
    const pokemonAbility = pokemonDetail.abilities?.[0]?.ability.name;
    const pokemonAbility2 = pokemonDetail.abilities?.[1]?.ability.name;
    const movementsUntil20 = pokemonDetail.moves?.slice(0, 21);
    // chart data
    const hp = pokemonDetail.stats?.[0].base_stat;
    const attack = pokemonDetail.stats?.[1].base_stat;
    const defense = pokemonDetail.stats?.[2].base_stat;
    const velocity = pokemonDetail.stats?.[5].base_stat;
    const data = [
        [
        'Element',
        'Density',
        { role: 'style' },
        {
            sourceColumn: 0,
            role: 'annotation',
            type: 'string',
            calc: 'stringify',
        },
        ],
        ['Hp', hp, ' #FCD676', null],
        ['Ataque', attack, '#E6901E', null],
        ['Defensa', defense,'#FCD676', null],
        ['Velocidad', velocity, '#E6901E', null],
    ];
    const options = {
        minWidth: 290,
        margin:  'auto',
        height: 300,
        bar: { groupWidth: '65%' },
        legend: { position: 'none' },
    };

    return (
    <div className='pokemonDetail'>
        <Header />
        <div className='content'>
            <div className='banner' style={{background:backgroundAccordingToType(pokemonType)}}>
                <div className='containerImage'>
                    <div><img src={pokemonDetail.sprites?.other.home.front_default} alt='pokemon'/></div>
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
                        <span style={{display:pokemonType?'inline-block':'none'}}>{pokemonType}</span>
                        <span style={{display:pokemonType2?'inline-block':'none'}}>{pokemonType2}</span>
                    </section>
                    <section>
                        <h2>Habilidades</h2>
                        <span style={{display:pokemonAbility?'inline-block':'none'}}>{pokemonAbility}</span>
                        <span style={{display:pokemonAbility2?'inline-block':'none'}}>{pokemonAbility2}</span>
                    </section>
                </div>
            </section>
            <section className='stats'>
                <h2>Stats</h2>
                <Chart
                chartType='BarChart'
                width='100%'
                height='300'
                data={data}
                options={options}
                />
            </section>
            <section  className='move'>
                <h2>Movements</h2>
                <ul>
                    {
                    movementsUntil20?.map( elem => (
                        <li>{elem.move.name}</li>
                    ))
                    }
                </ul>
            </section>
        </div>
    </div>
    );
}
export default PokemonDetail;