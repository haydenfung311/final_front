import* as FirebaseAuthService from "../authService/FirebaseAuthService.ts";
import axios from "axios";
import {CartItemDto} from "../data/cartItem/CartItemDto.ts";
import getEnvConfig from "../config/EnvConfig.ts";
const baseUrl = getEnvConfig().baseUrl;

const getAuthConfig = async () =>{
    const accessToken = await FirebaseAuthService.getAccessToken();

    if(!accessToken){
        throw new Error();
    }
    return{
        headers:{
            Authorization: `Bearer ${accessToken}`,
        }
    }
}

export async function getUserCart():Promise<CartItemDto[]>{
    try{
        const response = await axios.get<CartItemDto[]>(
            `${baseUrl}/cart`,
            await getAuthConfig()
        )
        return response.data;
    }catch (error){
        console.error(error);
        throw error;
    }
}

export async function putCartItem(pid:number, quantity:number){

    try{
        await axios.put(
            `${baseUrl}/cart/${pid}/${quantity}`,
            null,
            await getAuthConfig()
        )
    }catch (error){
        console.error(error);
        throw error;
    }
}

export async function patchCartItemQuantity(pid: number, quantity: number){
    try{
        const response = await axios.patch<CartItemDto>(
            `${baseUrl}/cart/${pid}/${quantity}`,
            null,
            await getAuthConfig()
        )
        return response.data;
    }catch (error){
        console.error(error);
        throw error;
    }
}

export async function deleteCartItem(pid:number){
    const accessToken = await FirebaseAuthService.getAccessToken();
    if (!accessToken) {
        throw new Error();
    }
    try {
        await axios.delete(
            `${baseUrl}/cart/${pid}`,
            {
                headers:{
                    Authorization: `Bearer ${accessToken}`,
                }
            }
        )

    }catch (error){
        console.error(error);
        throw error;
    }
}