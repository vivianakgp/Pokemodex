
import React, {useState}from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import pokedexImg from '../assets/pokedex.png';
import pokebol from '../assets/purepng.webp';

function Home() {
    const [ nameValue, setNameValue ] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const chageGlobalState = (e) => {
        e.preventDefault();
        console.log(nameValue)
        navigate('/pokedex')
        dispatch({
            type:'UPDATE_USER_NAME',
            payload:nameValue
        });
        setNameValue('')
    };
    return (
    <div className='Home'>
        <div className='container'>
            <div className='containerImg'>
                <img src={pokedexImg} alt='logoPokedex'/>
            </div>
            <h1>¡Hola entrenador!</h1>
            <p>Para poder comenzar, dame tu nombre</p>
            <form action='' onSubmit={chageGlobalState}>
                <input type='text' value={nameValue} placeholder='Tu nombre...' required onChange={(e)=>setNameValue(e.target.value)}/>
                <button type='submit'>Comenzar</button>
            </form>
        </div>
        <footer>
            <div className='redBlock'><img src={pokebol} alt='pokebola'/></div>
            <div className='blackBlock'></div>
        </footer>
    </div>
    );
}
export default Home;