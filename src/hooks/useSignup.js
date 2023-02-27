import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch } = useAuthContext()
// SIGNUP FUNCTION PARA LEVANAR UN NUEVO USUARIO
    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

         
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers : {'content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()
            // ESTA RESPUESTA DEBERIA DARME EL TOKEN CON EMAIL.
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            setIsLoading(false)
            //GUARDO LA RESPONSE DEL BACKEND en local storage
            localStorage.setItem('user', JSON.stringify(json))

            // actualizar el authcontex PARA Q EL USUARIO QUEDE GUARADDO. EN EL BROWSER

            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }
    return {signup, isLoading, error}
}