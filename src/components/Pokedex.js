import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
//import components
import SearchBox from './SearchBox';
import SelectBox from './SelectBox';
import PokedexCards from './PokemonCards';
import Header from './Header';
import Paginate from './Paginate';

function Pokedex() {
    const [ pokemons, setPokemons ]  = useState([]);
    const userName = useSelector(state => state.userName);
    // get current pokemons to pagination
    const pokemonPerPage = 20;
    const [ currentPage , setCurrenPage ] = useState(1);
    const indexOfLastPokemon = currentPage * pokemonPerPage;//1*10= 10 
    const indexOhFirstPokemon = indexOfLastPokemon - pokemonPerPage;//10-10= 0
    const currentPokemons = pokemons?.slice(indexOhFirstPokemon, indexOfLastPokemon);
    const totalpage = Math.ceil(pokemons.length/pokemonPerPage);

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
            .then(res =>{
                // console.log(res.data.results);
                setPokemons(res.data.results)
            })
    },[]);
    const newPokemonsByType = typePokemon => {
        setPokemons(typePokemon)
    };
    // scrollUp 
    const myRef = useRef(null);
    const scrollDiv = () => myRef.current.scrollIntoView();
    // pagination -change page
    const paginate = pageNumber => {
        setCurrenPage(pageNumber);
        scrollDiv();
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
            <div ref={myRef} className='PokemonList'>
                {
                currentPokemons.map(pokemon => <PokedexCards key={pokemon.url?pokemon.url:pokemon.pokemon.url } pokeUrl={pokemon.url? pokemon.url:pokemon.pokemon.url}/>)
                }
            </div>
            <div className='pagination'>
                <button className='prevBtn'
                    onClick={()=>{
                        setCurrenPage(currentPage-1);
                        scrollDiv();
                    }} disabled={currentPage<=1}><FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <Paginate
                pokemonPerPage={pokemonPerPage}
                totalPokemos={pokemons?.length}
                paginate={paginate}
                currentPage={currentPage}
                />
                <button className='nextBtn'
                    onClick={()=>{
                        setCurrenPage(currentPage+1);
                        scrollDiv();
                        }} 
                    disabled={currentPage>=totalpage}><FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    </div>
    );
}

export default Pokedex;