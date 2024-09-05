
import React from 'react';
import './projetos.css'
import CalculaDry from './CalculaDry.png'
import Futsamba from './futsamba.png'
import ClickMenu from './clickMenu.png'


const Projetos = () => {


  return (

    <div className="container-Projetos">

      <div className="center-Projetos">
        <h2>Projetos</h2>
        <div className='borda'></div>
      </div>

      <div className='title-projetos'>
        <h2>Projetos que fiz e participei.</h2>
      </div>

      <div className='projetos'>
        <div className='container-img'>
          <a href="https://calculadry.netlify.app/" target="_blank" rel="noreferrer">
            <img className="img-projetos" src={CalculaDry}alt="JavaScript"></img>
          </a><label>CalculaDry</label>
        </div>

        <div className='container-img'>
        <a href="https://futsamba.netlify.app/" target="_blank" rel="noreferrer">
          <img className="img-projetos" src={Futsamba}
            alt="JavaScript"></img></a>
          <label>Futsamba</label>
        </div>

        <div className='container-menu'>
          <img className="img-menu" src={ClickMenu}
            alt="JavaScript"></img>
          <label>Click-Menu</label>
        </div>




      </div>
    </div>



  )
}

export default Projetos;