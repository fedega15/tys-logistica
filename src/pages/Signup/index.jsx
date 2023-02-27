import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"
import styles from "./signup.module.css"
    
const Signup = () => {
    const [email, setEmail] = useState ('') 
    const [password, setPassword] = useState ('')
    const {signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className={styles.formSignup} onSubmit={handleSubmit}> 
            <h3>Registrarse</h3>

            <label className={styles.registerLabel} >Email:</label>
            <input className={styles.registerInput}
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}>
            </input>

            <label >Contraseña:</label>
            <input className={styles.registerInput}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}>
            </input>

            <button className={styles.registerButton} disabled={isLoading}>Registrarse</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default Signup