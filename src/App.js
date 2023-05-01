import Registrobasic from './componente/Registro/Registrobasic'
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Producto from './pages/Producto/Producto';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

 
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/producto/:id' element={ <Producto /> }/>
      <Route path='/Registro' element={<Registrobasic/>} />
    </Routes>
    </>
  );
}

 export default App;