import React, {useState} from 'react'
import  './navbar.css'
import { Link } from 'react-router-dom'
import logopng from "./logo.png"

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='navbar' >   
      <div className='nav_logo'><img src={logopng} style={{position: 'relative',top: '-5px', width: '48px', height: '48px', margin: '0px 0px' }} alt="" /> logistycaTyS</div> 
      
      <div className={`nav_items ${isOpen && "open"}`}>   
        <Link className='loginButton' to='/login'>INICIAR SESION</Link>
        <Link className='loginButton' to='/'>VEHICULOS</Link>
        <Link className='logoutButton' to='/signup'>AGREGA +</Link>
      </div>
      
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}> 
            <span></span>
            <span></span>
            <span></span>
       </div>
       
    </div>
  )
}

export default Navbar