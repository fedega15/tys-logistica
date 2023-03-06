import React, {useState} from 'react'
import  './navbar.css'

const Navbar2 = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='navbar' >   
       <div className='nav_logo'>logistycaTyS</div> 
       <div className={`nav_items ${isOpen && "open"}`}>   
            <a href="/">VEHICULOS</a>
            <a href="#">CHOFERES</a>
            <a href="#">HORARIOS</a>
            <a href="#">+</a>
       </div>
       <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}> 
            <span></span>
            <span></span>
            <span></span>
       </div>
    </div>
  )
}

export default Navbar2