// Le dará un mensaje de bienvenida al usuario ingresado anteriormente.
// Listará los pokemones traídos desde la pokeapi. Cada tarjeta será un link que llevará a
// “/pokedex/:id”, con el id del pokemon de la tarjeta. Estos pokemones deben estar paginados
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PokedexCards from './PokemonCards';

function Pokedex() {
    const [pokemons, setPokemons ]= useState([]);
    const userName = useSelector(state => state.userName);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
            .then(res =>{
                console.log(res.data.results);
                setPokemons(res.data.results)
            })
    },[])
    return (
    <div className='Pokedex'>
        <h1>Pokedex</h1>
        <h3>{`Welcome ${userName}`}</h3>
        <div  className='PokedexList'>{
            pokemons.map(pokemon => <PokedexCards key={pokemon.url} pokeUrl={pokemon.url}/>)
        }</div>
    </div>
    );
}

export default Pokedex;