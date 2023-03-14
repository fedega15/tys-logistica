import { customAxios } from "../axiosInstanse";
import { urlLogin } from '../URLS/loginUrl'
import axios from "axios";

axios.defaults.withCredentials = true;

export const newUser = async () => {
        
        return await customAxios.post(urlLogin)
}