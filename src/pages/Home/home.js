
import React from 'react';
import Sobre from '../sobre/sobre.js';
import Navbar from '../componentes/navbar/Navbar.js';
import './Home.css'
import Projetos from '../projetos/projetos.js';

const Home = () => {


  return (

    <>
      <div className="mainHome">
        <Navbar />
        <div className='space'></div>
        <div className="center">

          <div className='container-text-home'>
            <div className='text-home'>

              <h1><strong>Olá!</strong></h1>
              <span className="typed">Seja bem vindo!</span>

              <a href="https://api.whatsapp.com/send/?phone=5521977384132&text&type=phone_number&app_absent=0">
              <button className='botao-contato'>Contate-me</button>
              </a>


            </div>

          </div>
          <Sobre />
          <Projetos/>
        </div>
      </div>
    </>







  )
}

export default Home;