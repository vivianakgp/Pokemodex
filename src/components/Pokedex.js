// Le dará un mensaje de bienvenida al usuario ingresado anteriormente.
// Listará los pokemones traídos desde la pokeapi. Cada tarjeta será un link que llevará a
// “/pokedex/:id”, con el id del pokemon de la tarjeta. Estos pokemones deben estar paginados
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Pokedex() {
    const [pokemons, setPokemons ]= useState([]);
    const userName = useSelector(state => state.userName);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/ability/?limit=60&offset=60')
            .then(res =>{
                console.log(res.data.results);
                setPokemons(res.data.results)
            })
    },[])
    return (
    <div className='Pokedex'>

        <h1>Pokedex</h1>
        <h3>{`Welcome ${userName}`}</h3>
        <ul>{
            pokemons.map(pokemon => (
                <li key={pokemon.url}>{pokemon.name}</li>
            ))

            }</ul>
        <Link to='/'>Ir a home</Link>
        <Link to='/pokedex/cheri'>pokemo details</Link>

    </div>
    );
}

export default Pokedex;