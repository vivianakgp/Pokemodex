import {
  HashRouter,
  Routes,
  Route,
  // useParams
} from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoute';
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';

function App() {
  // const { name } = useParams();
  return (
    <HashRouter>
      <div className='App'>
          {/* <p>{name}</p> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex />} />
              <Route path='/pokedex/:name' element={<PokemonDetail />} />
            </Route>
          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
