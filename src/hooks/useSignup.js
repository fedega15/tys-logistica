import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => { //funcion q hace cambio de estado
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch } = useAuthContext()
// SIGNUP FUNCTION PARA LEVANAR UN NUEVO USUARIO
    const signup = async (usuario, contraseña) => {
        setIsLoading(true)
        setError(null)

         //aca envio la request a la api el email y password
        const response = await fetch('/api/user/signup', { // endpoint de la api
            method: 'POST',
            headers : {'content-Type': 'application/json'},
            body: JSON.stringify({usuario, contraseña})
        })
        const json = await response.json()
            // ESTA RESPUESTA DEBERIA DARME EL TOKEN CON EMAIL.
        if (!response.ok) { // chequeo si esta ok o no
            setIsLoading(false) // no esta ok error
            setError(json.error)
        }
        if(response.ok){
            setIsLoading(false)
            // si esta ok GUARDO LA RESPONSE DEL BACKEND en local storage
            localStorage.setItem('user', JSON.stringify(json))

            // actualizar el authcontex PARA Q EL USUARIO QUEDE GUARADDO. EN EL BROWSER

            dispatch({type: 'LOGIN', payload: json}) // login action

            setIsLoading(false) 
        }
    }
    return {signup, isLoading, error}
}