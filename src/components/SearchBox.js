import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
                    type='text'
                    value={pokemonName} 
                    placeholder='Busca un pokemón'
                    // placeholder={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    onChange={ e => setPokemonName(e.target.value) }
                />
                <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            </form>

        </div>
    );
}
export default SearchBox;