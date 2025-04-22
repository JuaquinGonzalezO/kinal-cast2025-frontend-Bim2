import toast from "react-hot-toast";
import { followeChannel as followedChannelRequest } from "../../services";


export const useFollowChannel = () =>{
    const followeChannel = async ( channelId, onSuccess)=>{
        const responseData  = await  followedChannelRequest(channelId)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'Ocurrio un error al seguir al canal'

            )
        }

        toast.success('Channel follwed succesfully!')
        onSuccess(true)
    }

    return{
        followeChannel
    }
}