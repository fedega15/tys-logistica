import React  from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"
import logopng from "./logo.png"
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

import { CgMenuGridO } from 'react-icons/cg'
import { useState } from 'react'



const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext ()

  const handleClick = () => {
      logout () //elimina el item user de localstorage el token y el global state.
  }

 const [active, setActive] = useState('navBarMenu')
 
  return (
    <header className={styles.navbarHeader}>
        <div className='container'>
            <Link to='/'>
              <img src={logopng} style={{position: 'relative',top: '17px', width: '48px', height: '48px', margin: '0px 0px' }} />
                <h1 className={styles.titleTyS}>TyS Logistica</h1>
            </Link>
            <nav className={styles.navbarContainer}>               
               <Link className={styles.loginButton} to='/login'>Iniciar sesion</Link>                 
            </nav>
            <nav>          
            <Link className={styles.logoutButton} onClick={handleClick}>Cerrar sesion</Link>
            </nav>
          
            <div className={styles.navBarMenu}>
              <ul className={styles.menu}>
                  <Link className={styles.listItem}>CAMIONES</Link>               
                  <Link className={styles.listItem}>CHOFERES</Link>               
                  <Link className={styles.listItem}>AGREGA TU CAMION</Link>                          
              </ul>
              <button className={styles.btnOne}> Contact</button>
              
            </div>
            <div   className={styles.toggleIcon}>
                    <CgMenuGridO className={styles.icon}/>
              </div>


         
       
        </div>
    </header>
    
  )
}

export default Navbar