import {
  HashRouter,
  Routes,
  Route,
  useParams
} from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoute';
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';

function App() {
  const { id } = useParams();
  return (
    <HashRouter>
      <div className='App'>
          <header>HEADER</header>
          <p>{id}</p>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex />} />
              <Route path='/pokedexDetail/:id' element={<PokemonDetail />} />
            </Route>
          </Routes>
          <footer>FOOTER</footer> 
      </div>
    </HashRouter>
  );
}

export default App;
