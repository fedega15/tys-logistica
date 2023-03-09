import axios from "axios";

const config  = axios.create ( {
    baseURL: 'http://webports.duckdns.org:5000',
    
})

export const customAxios = config