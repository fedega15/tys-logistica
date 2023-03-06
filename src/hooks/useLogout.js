import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    // hacemos el log out sin enviar request al backend.
    // eliminando el token del local storage

    const Logout = () => {

        const { dispatch } = useAuthContext()
        //remuevo el user del storage
        localStorage.removeItem('user')

        // dispatch logout,si vemos en authcontext esta armado el caso logout
        dispatch ({type: 'LOGOUT'})
    }
    
    return  {Logout} // ahora ver como usarlo en la app(boton en nav)
}