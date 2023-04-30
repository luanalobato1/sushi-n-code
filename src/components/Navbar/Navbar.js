import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-custom ">
        <div className="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/assets/logo.png" alt="Sushi&Code" width="30" height="24"/>
        </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" href="#">Ubicacion</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" href="#">Contacto</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
