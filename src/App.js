import { Routes, Route } from 'react-router-dom';
import './App.css'
import Registrobasic from './componente/Registro/Registrobasic'

 
function App() {
  return (
 <>
 <Routes>
  <Route path='/Registro' element={<Registrobasic/>} />
 </Routes>
 </>

  );
 }
 export default App;