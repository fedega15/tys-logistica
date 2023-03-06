import React from 'react' 
import styles from  "./signup.module.css"


function Signup() {
  return (
    <form className={styles.formSignup} > 
        <h3>Menu navegación</h3>


        <button className={styles.myButton}>CAMIONES</button>
        <br />
        <button className={styles.myButton}>CHOFERES</button>
        <br />
        <button className={styles.myButton}> CHASIS </button>
        <br />
        <button className={styles.myButton}>AGREGA TU CAMION </button>
        <br />

        
    </form>
)

 
}
export default Signup;