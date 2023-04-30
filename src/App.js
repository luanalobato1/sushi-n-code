import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  const token = false

  return (
    <Routes>
      <Route index element={<Navigate to='/landing' />} />
      <Route path='/landing' element={ <Landing /> } />   
      <Route path='/login' element={ <Login /> } />
      <Route path='/' element={token? <Home /> : <Navigate from='/home' exact to='/landing'/>} />
      <Route path='/home' element={token? <Home /> : <Navigate from='/home' exact to='/login'/>} />
    </Routes>
  );
}

export default App;
