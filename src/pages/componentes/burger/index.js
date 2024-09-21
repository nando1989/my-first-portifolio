import React, { useState } from "react";
import "./styles.css"; // Arquivo de estilos
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <nav className={`nav-menu ${isOpen ? "show" : ""}`}>
        <ul>
          <Link to={"/home"} className="list1">  <li>Inicio</li> </Link>
          <Link to="/sobre" className="list">  <li>Sobre mim</li> </Link>
          <Link to="/cadastrar" className="list">  <li>Projetos</li> </Link>
          <Link to="https://drive.google.com/file/d/1D5iXT_71So0y6BPo5e9J_Gxdob2sSRur/view?usp=drive_link" className="list">  <li>Currículo</li> </Link>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;


