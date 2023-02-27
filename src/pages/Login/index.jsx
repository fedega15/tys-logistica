import { useState } from "react"
import styles from "./login.module.css"

const Login = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className={styles.formLogin} onSubmit={handleSubmit}> 
            <h3>Iniciar Sesion</h3>

            <label className={styles.loginLabel} >Email:</label>
            <input className={styles.loginInput}
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}>
            </input>

            <label >Contraseña:</label>
            <input 
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}>
            </input>

            <button className={styles.loginButton}>Iniciar Sesion</button>
        </form>
    )
}
export default Login