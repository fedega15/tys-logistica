import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// para mantener el estado del usuario con la app, cuando este login tenga ese estado
//log out ese estado signup ese estado.. para mantenerlo y guarde la info
export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error ('useAuthContext debe usarse dento de AuthContextProvider')
    }
    return context
}