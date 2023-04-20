import './App.css';
import { Routes, Route} from 'react-router-dom';
import Producto from './pages/Producto/Producto';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/producto/:id' element={ <Producto /> }>
    </Routes>
    </>
  );
}

export default App;
