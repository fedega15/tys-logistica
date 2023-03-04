import { useState } from "react"
import styles from "./login.module.css"
import { useLogin } from "../../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const { login, error, isLoading} = useLogin ()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login (email, password) // depende de si isloading es true o false Y UN ERROR SI ES FALSE      
    }

    return (
        <form className={styles.formLogin} onSubmit={handleSubmit}> 
            <h3>Iniciar Sesion</h3>

            <label className={styles.loginLabel} >Email:</label>
            <input className={styles.loginInput}
                type='text'
                onChange={(e) => setEmail(e.target.value)}
                value={email}>
            </input>

            <label >Contraseña:</label>
            <input 
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}>
            </input>

            <button disabled={isLoading} className={styles.loginButton}>Iniciar Sesion</button>
            {error && <div className={styles.error}>{error}</div>}
        </form>
    )
}
export default Login