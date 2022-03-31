
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import SelectBox from './SelectBox';
import PokedexCards from './PokemonCards';
import Header from './Header';

function Pokedex() {
    const [ pokemons, setPokemons ]= useState([]);
    const userName = useSelector(state => state.userName);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
            .then(res =>{
                console.log(res.data.results);
                setPokemons(res.data.results)
            })
    },[]);
    const newPokemonsByType = (typePokemon )=>{
        setPokemons(typePokemon)
    };

    return (
    <div className='Pokedex'>
        <Header />
        <div className='container'>
            <h2>{<b>{`Bienvenido ${userName}, `}</b>}aquí podrás encontrar tu pokemón favorito</h2>
            <div className='searchBoxes'>
                <SearchBox />
                <SelectBox newPokemonsByType={newPokemonsByType}/>
            </div>
            <div  className='PokemonList'>{
                pokemons.map(pokemon => <PokedexCards key={pokemon.url?pokemon.url:pokemon.pokemon.url } pokeUrl={pokemon.url? pokemon.url:pokemon.pokemon.url}/>)
            }</div>
        </div>

    </div>
    );
}

export default Pokedex;