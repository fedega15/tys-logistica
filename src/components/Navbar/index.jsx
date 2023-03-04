import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"
import logopng from "./logo.png"
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'


const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext ()

  const handleClick = () => {
      logout () //elimina el item user de localstorage el token y el global state.
  }

  return (
    <header className={styles.navbarHeader}>
        <div className='container'>
            <Link to='/'>
              <img src={logopng} style={{position: 'relative',top: '17px', width: '48px', height: '48px', margin: '0px 0px' }} />
                <h1 className={styles.titleTyS}>TyS Logistica</h1>
            </Link>
            <nav className={styles.navbarContainer}>               
               <Link className={styles.loginButton} to='/login'>Iniciar sesion</Link>
               <Link className={styles.signupButton} to='/signup'>Registrarse </Link>                  
            </nav>
            <div>          
            <button className={styles.logoutButton} onClick={handleClick}>Cerrar sesion</button>
            </div>
         
       
        </div>
    </header>
    
  )
}

export default Navbar