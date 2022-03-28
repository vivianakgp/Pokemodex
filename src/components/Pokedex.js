
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import SelectBox from './SelectBox';
import PokedexCards from './PokemonCards';

function Pokedex() {
    const [pokemons, setPokemons ]= useState([]);
    const userName = useSelector(state => state.userName);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
            .then(res =>{
                // console.log(res.data.results);
                setPokemons(res.data.results)
            })
    },[]);
    const newPokemonsByType = (typePokemon )=>{
        setPokemons(typePokemon)
    };
    return (
    <div className='Pokedex'>
        <h1>Pokedex</h1>
        <h3>{`Welcome ${userName}`}</h3>
        <SearchBox />
        <SelectBox newPokemonsByType={newPokemonsByType}/>
        <div  className='PokedexList'>{
            pokemons.map(pokemon => <PokedexCards key={pokemon.url?pokemon.url:pokemon.pokemon.url } pokeUrl={pokemon.url? pokemon.url:pokemon.pokemon.url}/>)
        }</div>
    </div>
    );
}

export default Pokedex;