import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/logo.png'
import logoText from '../../assets/logoText.png'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg nav-custom-color px-5">
      <div className="container-fluid d-flex justify-content-lg-between">
        <section>
          <NavLink className="navbar-brand d-flex align-items-center" exact to={'/'}>
            <img src={logo} alt='Logo de Sushi & Más' />
            <img className='logoText-size' src={logoText} alt='Texto del logo' />
          </NavLink>
        </section>
        <section>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-custom-color" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex">
              <NavLink className="dropdown-item mx-2 link-custom text-custom-color" href='#'>Administración</NavLink>
              <NavLink className="dropdown-item mx-2 link-custom text-custom-color" exact to={'/login'}>Ingresar</NavLink>
              <NavLink className="dropdown-item mx-2 link-custom text-custom-color" href='#'>Registrarme</NavLink>
            </div>
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Navbar