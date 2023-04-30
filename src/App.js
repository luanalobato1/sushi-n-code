import './App.css';
import { Routes, Route} from 'react-router-dom';
import Producto from './pages/Producto/Producto';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/producto/:id' element={ <Producto /> }/>
    </Routes>
    </>
  );
}

export default App;
