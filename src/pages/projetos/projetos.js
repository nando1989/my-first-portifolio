
import React from 'react';
import './projetos.css'
import CalculaDry from './CalculaDry.png'
import Futsamba from './futsamba.png'
import Pump from './pump.png'
import Zap from './zaplinks.png'
import fabrica from './fabrica.png'
import Quiz from './quiz.png'



const Projetos = () => {


  return (

    <div className="container-Projetos">

      <div className="center-Projetos">
        <h2>Projetos</h2>
        <div className='borda-projetos'></div>
      </div>

      <div className='title-projetos'>
        <h2>Projetos que fiz e participei.</h2>
      </div>

      <div className='projetos'>
        <div className='container-img'>
          <a href="https://calculadry.netlify.app/" target="_blank" rel="noreferrer">
            <img className="img-projetos" src={CalculaDry}alt="JavaScript"></img>
          </a><label>Calculadora de Drywall</label>
        </div>

        <div className='container-img'>
        <a href="https://futsamba.netlify.app/" target="_blank" rel="noreferrer">
          <img className="img-projetos" src={Futsamba}
            alt="JavaScript"></img></a>
          <label>Futsamba</label>
        </div>
        
        <div className='container-img'>
        <a href="https://pump-treino-e-saude.vercel.app/" target="_blank" rel="noreferrer">
          <img className="img-projetos" src={Pump}
            alt="JavaScript"></img></a>
          <label>Pump</label>
        </div>
        <div className='container-img'>
        <a href="https://675f84745b4ce94fe31eee55--linkzap.netlify.app/" target="_blank" rel="noreferrer">
          <img className="img-projetos" src={Zap}
            alt="JavaScript"></img></a>
          <label>ZapLinks</label>
        </div>
        <div className='container-img'>
        <a href="https://fabricadogroove.com.br/quizlanding" target="_blank" rel="noreferrer">
          <img className="img-projetos" src={fabrica}
            alt="JavaScript"></img></a>
          <label>Pulo do gato</label>
        </div>
        <div className='container-img'>
        <a href="https://fabricadogroove.com.br" target="_blank" rel="noreferrer">
          <img className="img-projetos" src={Quiz}
            alt="JavaScript"></img></a>
          <label>Quiz</label>
        </div>

        




      </div>
    </div>



  )
}

export default Projetos;