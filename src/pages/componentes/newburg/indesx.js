import React, { useState } from "react";
import './style.css'
import { Link } from 'react-router-dom'
 // Arquivo de estilos
import './style.css';

const Menuburg = () => {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div style={{ width: '100%', height: '4vh', position: "absolute" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
      </nav>

      <div className={menu_class}>
        <Link to="https://drive.google.com/drive/folders/16PfLi2XPMJBD7mrSEQ1iJZbJqRiJdGzo?usp=sharing" className='list'><li>Media Kit</li></Link>
        <Link to='https://w.app/XNTpyg' className='list'><li>Contrate</li></Link>
        <Link to='https://www.instagram.com/futsambaoficial/' className='list'><li>Instagram</li></Link>
        <Link to='https://www.instagram.com/paneladofutsamba/' className='list'><li></li>Panela do Futsamba </Link>
      </div>
    </div>
  )
}

export default Menuburg;
