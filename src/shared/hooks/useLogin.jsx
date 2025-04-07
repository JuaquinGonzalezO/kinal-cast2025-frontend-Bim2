import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {login as loginRequest} from '../../services'
import toast from "react-hot-toast";

export const useLogin = () =>{
    const [isLoading, setIsLoanding] = useState(false)

    const navigate = useNavigate();

    const login = async (email, password) =>{
        setIsLoanding(true)

        const response = await loginRequest({email, password})
        
        setIsLoanding(false)

        console.log(response)

        if(response.error){
            return toast.error(response.error?.response?.data||'Ocurrio un error al iniciar secion, intenta de nuevo')
        }
        const {userDetails} = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))
        navigate('/')
    }

    return{
        login,
        isLoading
    }
}