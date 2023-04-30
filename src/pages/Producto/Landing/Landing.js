import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import '../../../css/general.css'
import imgLanding from '../../../assets/sushiLandingPage.jpeg'
import './landing.css'

const Home = () => {
  return (
    <>
      <Navbar />

        <main>
          <section className='custom-container'>
            <article className='custom-hero-text'>
              <h2>Descubre sabores tradicionales</h2>

              <p>
                Sushi, sashimi, wok, ramen, gyoza, sopa pho, bibimbap, etc... Una variedad de <b>nuevos sabores</b> te esperan. ¿Te los vas a perder?
              </p>

              <NavLink className='custom-button link-custom'>¡Pedir ya!</NavLink>
            </article>

            <img className='img-custom-size' src={imgLanding} alt='Sushi' />
          </section>
        </main>

      <Footer />
    </>
  )
}

export default Home