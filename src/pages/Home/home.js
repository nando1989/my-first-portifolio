
import React from 'react';
import Sobre from '../sobre/sobre.js';
import Navbar from '../componentes/navbar/Navbar.js';
import './Home.css'
import Projetos from '../projetos/projetos.js';
import Perfil from './perfil.jpg'
import BurgerMenu from '../componentes/burger/index.js';
import Whatsapp from './Whatsapp.png'
import Facebook from './facebook.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import Github from './github.png'

const Home = () => {


  return (
    <><div className='container-burger'>
      <BurgerMenu />
      
      <div className="container-social-resp">
        <div className='link1'> <a href="https://www.linkedin.com/in/fernando-de-souza-84b0652a6/"> <img src={linkedin} alt="Whatsapp" /> </a></div>
        <div className='link1'> <a href="https://github.com/nando1989"> <img src={Github} alt="Whatsapp" /> </a></div>
        <div className='link1'> <a href="https://wa.me/5521977384132"> <img src={Whatsapp} alt="Whatsapp" /> </a></div>
        <div className='link2'><a href="https://www.facebook.com/fernando.souza.125323"> <img src={Facebook} alt="Whatsapp" /> </a></div>
        <div className='link3'><a href="https://www.instagram.com/nandobaixista/"> <img src={instagram} alt="Whatsapp" /> </a></div>
      </div>
    
    </div>
      <div className="main-home">
        <Navbar />
        <div className='space'></div>
        <div className="center">
          <div className='container-text-home'>

            <div className='image-perfil-resp'>
              <img className='foto' src={Perfil} alt="minha foto" />
            </div>
            
            <div className='text-home'>
              <h1><strong>Olá!</strong></h1>
              <span className="typed">Seja bem vindo!</span>
              <a href="https://api.whatsapp.com/send/?phone=5521977384132&text&type=phone_number&app_absent=0">
                <button className='botao-contato'>Contate-me</button>
              </a>
            </div>
            <div className='text-home-resp'>
              <h1><strong>Olá!</strong></h1>
              <span className="typed">Bem vindo!</span>
              <a href="https://api.whatsapp.com/send/?phone=5521977384132&text&type=phone_number&app_absent=0">
                <button className='botao-contato'>Contate-me</button>
              </a>
            </div>
          </div>
          <Sobre />
          <Projetos />
        </div>
      </div>
    </>







  )
}

export default Home;