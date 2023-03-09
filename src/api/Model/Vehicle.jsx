import { customAxios } from "../axiosInstanse";
import { urlGetVehicles } from "../URLS/vehiclesUrl";

export const getVehicles = async () => {
    await customAxios.get(urlGetVehicles)
}