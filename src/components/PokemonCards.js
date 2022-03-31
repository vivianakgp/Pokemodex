
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';



function PokemonCards({pokeUrl}) {
    const [ pokemon, setPokemon ] = useState({});
    useEffect(()=>{
        axios.get(pokeUrl).then(res => {
                console.log(res.data);
                setPokemon(res.data)
            })
    },[pokeUrl]);
    const pokemonType = pokemon.types?.[0].type.name;
    console.log(pokemonType)
    const backgroundAccordingToType = () => {
        switch(pokemonType){
            case'normal':
                return 'linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)' 
            case'fighting':
                return 'linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)'
            case'flying':
                return 'linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)'
            case'poison':
                return 'linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)'
            case'ground':
                return 'linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)'
            case'rock':
                return 'linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)'
            case'bug':
                return 'linear-gradient(177.03deg, #020024 -11.97%, #097975 57.49%, #a5ff00 135.64%)'
            case'ghost':
                return 'linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)'
            case'steel':
                return 'linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)'
            case'fire':
                return 'linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)'           
            case'water':
                return 'linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)'
            case'grass':
                return 'linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)'
            case'electronic':
                return 'linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)'
            case'psychic':
                return 'linear-gradient(179.75deg, #020024 -19.96%, #097975 43.67%, #00d4ff 138.4%)'
            case'ice':
                return 'linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)'
            case'dragon':
                return 'linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)'
            case'dark':
                return 'linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)'
            case'fairy':
                return 'linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)'
            case'unknown':
                return 'linear-gradient(179.75deg, #020024 -19.96%, #097975 43.67%, #ff8600 138.4%)'
            default:
                return 'linear-gradient(179.75deg, #020024  -19.96%, #081179 43.67%, #a5ff00 138.4%)'
        }
    };
    const 
    colorAccordingToType = () => {
        switch(pokemonType){
            case'normal':
                return '#7C3F4C' 
            case'fighting':
                return ' #CB735D '
            case'flying':
                return ' #AAFFA8 '
            case'poison':
                return '#CE9BFF '
            case'ground':
                return ' #D69638 '
            case'rock':
                return '#D3D3D3'
            case'bug':
                return '#a5ff00 '
            case'ghost':
                return ' #787DDA '
            case'steel':
                return ' #A8A8A8 '
            case'fire':
                return ' #E8AE1B '           
            case'water':
                return ' #82B2F1 '
            case'grass':
                return ' #CAE099 '
            case'electronic':
                return '#7075D9 '
            case'psychic':
                return ' #00d4ff '
            case'ice':
                return ' #BDEBFE '
            case'dragon':
                return ' #A2BEC1 '
            case'dark':
                return ' #5A5E5D '
            case'fairy':
                return ' #CD7D98 '
            case'unknown':
                return ' #ff8600 '
            default:
                return ' #a5ff00 '
        }
    };

    return (
    <div className='PokemonCard' style={{background:backgroundAccordingToType()}}>
        <Link style={{textDecoration: 'none'}} to={`/pokedex/${pokemon.name}`} >
            <div className='containerImg' >
                <img src={pokemon.sprites?.front_default} alt='pokemon'/>
            </div>
            <div className='containerInfo'  style={{color:colorAccordingToType()}} >
                <h2>{pokemon.name}</h2>
                <h3>{pokemonType}</h3>
                <p>TIPO</p>
                <p className='secStats borderTop'>
                    <span>
                        <p>HP</p>
                        <h4>{pokemon.stats?.[0].base_stat}</h4>
                    </span>
                    <span>
                        <p>ATAQUE</p>
                        <h4>{pokemon.stats?.[1].base_stat}</h4>
                    </span>
                </p>
                <p className='secStats'>
                    <span>
                        <p>DEFENSA</p>
                        <h4>{pokemon.stats?.[2].base_stat}</h4>
                    </span>
                    <span>
                        <p>VELOCIDAD</p>
                        <h4>{pokemon?.stats?.[5].base_stat}</h4>
                    </span>
                </p>
            </div>
        </Link>
    </div>
    );
}

export default PokemonCards;