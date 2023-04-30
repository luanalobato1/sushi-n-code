import './App.css';
import { Routes, Route} from 'react-router-dom';
import Producto from './pages/Producto/Producto';
import Landing from './pages/Producto/Landing/Landing';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Landing /> } />
      <Route path='/producto/:id' element={ <Producto /> } />
    </Routes>
    </>
  );
}

export default App;
