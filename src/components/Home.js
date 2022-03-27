// Crear la ruta raíz /. Será una ruta pública, en la que sólamente contendrá
// un input que le preguntará el nombre al usuario.
// Dicho nombre se almacenará en la store de redux, 
// y será obligatorio para que pueda acceder a las rutas protegidas.
import React, {useState}from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
        <form action='' onSubmit={chageGlobalState}>
            <input type='text' value={nameValue} required onChange={(e)=>setNameValue(e.target.value)}/>
            <button type='submit'>enter</button>
        </form>
    </div>
    );
}
export default Home;