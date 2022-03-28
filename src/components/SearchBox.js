import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = ()=> {
    const [pokemonName, setPokemonName ] = useState('');
    const navigate = useNavigate();
    const searchPokemonByName = e => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonName}`);
    };
    return (
        <div className='SearchBox'>
            <form onSubmit={searchPokemonByName}>
                <input
                    type="text" 
                    value={pokemonName} 
                    placeholder="Search By Name"
                    onChange={ e => setPokemonName(e.target.value) }
                />
            </form>

        </div>
    );
}
export default SearchBox;