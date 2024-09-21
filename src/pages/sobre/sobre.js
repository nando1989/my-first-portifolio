import React from 'react'
import './sobre.css'

const Sobre = () => {
  return (

    <div className="container-sobre">

      <div className="center-sobre">
        <h2>Sobre mim</h2>
        <div className='borda-sobre'></div>
      </div>

      <div className='myTitle'>
        <h2>Olá, Eu me chamo Fernando de Souza, desenvolvedor FrontEnd.</h2>
      </div>

      <div className='text-date'>
        <div className='my-text'>
          <p>Sou um desenvolvedor de software em início de carreira,
            apaixonado por resolver problemas e transformar soluções em
            código. Recentemente, tenho trabalhado em freelas e projetos
            colaborativos com amigos. Valorizo a contribuição para os
            projetos não apenas aplicando técnicas, mas também
            trabalhando em equipe, buscando o crescimento mútuo. Tenho
            um forte interesse em experiência do usuário (UX), e, graças à
            minha experiência anterior em vendas, consigo entender e
            absorver bem as necessidades dos clientes, o que me ajuda a
            melhorar a experiência e a eficácia das aplicações.</p>
        </div>
        <div className='title-skills'> <h2>Skills:</h2> </div>
        <div class='skills'>

          <div className='container-img'>
            <img className="img-skill" src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
              alt="JavaScript"></img>
              <label>HTML</label>
          </div>
         

          <div className='container-img'>
            <img className="img-skill" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
              alt="JavaScript"></img>
              <label>Css3</label>
          </div>

          <div className='container-img'>
            <img className="img-skill" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png"
              alt="JavaScript"></img>
              <label>JavaScript</label>
          </div>

          <div className='container-img'>
            <img className="img-skill" src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
              alt="JavaScript"></img>
            <label>ReactJS</label>
          </div>

          <div className='container-img'>
            <img className="img-skill" src="https://files.raycast.com/80x1pxra7cyabkoyxqvlono2sg9p"
              alt="JavaScript"></img>
              <label>TailwindCSS</label>
          </div>

          <div className='container-img'>
            <img className="img-skill" src="https://i.pinimg.com/736x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg"
              alt="JavaScript"></img>
              <label>NextJS</label>
          </div>

          <div className='container-img'>
            <img className="img-skill" src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
              alt="JavaScript"></img>
              <label>Node</label>
          </div>
          
          <div className='container-img'>
            <img className="img-skill" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/git_original_wordmark_logo_icon_146510.png"
              alt="JavaScript"></img>
              <label>Git</label>
          </div>

        </div>
        
      </div>
    </div>



  )
}

export default Sobre;
