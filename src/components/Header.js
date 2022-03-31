import React from 'react';
import pokebol from '../assets/pokeball.png';
import pokedexImg from '../assets/pokedex.png';

const Header = () => {
    return (
        <header>
            <div className='redBlock'>
                <div>
                    <img className='logoPokedex' src={pokedexImg} alt='logoPokedex' />
                    <img className='pokebol' src={pokebol} alt='pokebola' />
                </div>
            </div>
            <div className='blackBlock'></div>
    </header>

    )
}
export default Header;