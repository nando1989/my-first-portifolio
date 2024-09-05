import React from 'react';
import  './Header.css'
import Whatsapp from './Whatsapp.png'
import Facebook from './facebook.png'
import instagram  from './instagram.png'
import Favicon from './favicon.png'







const Header = () => {
  
 return (
   
  <div className="main">
      <div className="center">
        <div className="topo"> 
           <div className="top2">
                 <div className='zap'>
                    <img className="favicon"src={Favicon}></img>
                 </div>
           </div>
        <div className="navbar">
               <div className="list1">  <li>Home</li> </div>
               <div className="list2">  <li>Contato</li> </div>
               <div className="list3">  <li>Galeria</li> </div>
               <div className="list4">  <li>Sobre mim</li> </div>
        </div>
      
           <div className="top1">
              <div className='zap'>
                 <div className='link1'> <a href="https://wa.me/5521977384132"> <img src={Whatsapp}alt="Whatsapp" /> </a></div>
                 <div className='link2'><a href="https://www.facebook.com/fernando.souza.125323"> <img src={Facebook}alt="Whatsapp" /> </a></div>
                 <div className='link3'><a href="https://www.instagram.com/nandobaixista/"> <img src={instagram}alt="Whatsapp" /> </a></div>
              </div>
           </div>
       
      </div>
      
      <div className='mainCenter'>
           <div className='main1'>
             <h1>Solicitar orçamento</h1>
             <button>Clique aqui</button>
           
           </div>   
           <div className='main2'>

           </div>
      </div>
    
    </div>

  </div>
  
  )
}

export default Header
