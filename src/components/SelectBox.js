import React, { useEffect, useState }from "react";
import axios from 'axios';

const SelectBox = ({ newPokemonsByType }) => {
    const [ pokemonTypes , setPokemonTypes ] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => {
            // console.log(res.data.results);
            setPokemonTypes(res.data.results);
        })
    },[]);
    const getPokemons = e => {
        e.preventDefault();
        // console.log(e.target.value);
        axios.get(e.target.value)
        .then(res =>{
            // console.log(res.data.pokemon);
            newPokemonsByType(res.data?.pokemon)
        })
    };
    return (
        <div className='SelectBox'>
            <select onChange={getPokemons}>
                <option selected disabled>Todos los pokemones</option>
                {
                pokemonTypes.map( type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
            </select>
        </div>
    );
}
export default SelectBox;