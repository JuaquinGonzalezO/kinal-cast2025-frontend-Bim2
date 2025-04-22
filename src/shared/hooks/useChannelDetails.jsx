import { useState } from "react";
import toast from "react-hot-toast";
import { getChannelDetails as getChannelDetailsRequest } from "../../services";

export const useChannelDetails = () =>{
    
    const [ChannelDetails , SetChannelDetails] = useState();

    const getChannelDetails = async() =>{
        const responseData = await getChannelDetailsRequest(id)

        if(responseData.error){
            return toast.error(
                  responseData.e?.response?.data || 'Error al cargar la informacion del canal'
            )
        }

        SetChannelDetails(responseData)

    }
    return{
        ChannelDetails,
        isFeching: !ChannelDetails,
        getChannelDetails
    }

   
} 