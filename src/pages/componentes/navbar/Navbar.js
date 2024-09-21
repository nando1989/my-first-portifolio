
import './Navbar.css';
import { Link } from 'react-router-dom';
import Perfil from './perfil.jpg'
import Footer from '../footer';
import React, { useState } from 'react'


const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false)
   const toggleMenu = () => {
     setShowMenu(!showMenu)
   }

   
   return (
      <>
         <div className='container-navbar'>
            <div className='image-perfil'>
               <img className='foto' src={Perfil} alt="minha foto" />
               <h1>Fernando de Souza</h1>
            </div>
            <div className="navbar">
               <div className="links">
                  <Link to={"/home"} className="list1">  <li>Inicio</li> </Link>
                  <Link to="/sobre" className="list">  <li>Sobre mim</li> </Link>
                  <Link to="/cadastrar" className="list">  <li>Projetos</li> </Link>
                  <Link to="https://drive.google.com/file/d/1D5iXT_71So0y6BPo5e9J_Gxdob2sSRur/view?usp=drive_link" className="list">  <li>Currículo</li> </Link>
               </div>
               
               
            </div>
            <a href="https://api.whatsapp.com/send/?phone=5521977384132&text&type=phone_number&app_absent=0">
             <button className='button-whatsapp'>Falar pelo Whatsapp</button> 
             </a>
             <Footer />


         </div>

      </>
   )
}

export default Navbar;