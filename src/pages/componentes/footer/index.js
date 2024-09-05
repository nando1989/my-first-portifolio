import React from 'react'
import Whatsapp from './Whatsapp.png'
import Facebook from './facebook.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import Github from './github.png'
import './styles.css'

const Footer2 = () => {
  return (
    <div className='container-footer'>
      <div className="container-social">
        <div className='link1'> <a href="https://www.linkedin.com/in/fernando-de-souza-84b0652a6/"> <img src={linkedin} alt="Whatsapp" /> </a></div>
        <div className='link1'> <a href="https://github.com/nando1989"> <img src={Github} alt="Whatsapp" /> </a></div>
        <div className='link1'> <a href="https://wa.me/5521977384132"> <img src={Whatsapp} alt="Whatsapp" /> </a></div>
        <div className='link2'><a href="https://www.facebook.com/fernando.souza.125323"> <img src={Facebook} alt="Whatsapp" /> </a></div>
        <div className='link3'><a href="https://www.instagram.com/nandobaixista/"> <img src={instagram} alt="Whatsapp" /> </a></div>
      </div>
    </div>
  )
}

export default Footer2
