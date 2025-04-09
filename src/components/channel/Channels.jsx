import {useNavigate} from "react-router-dom"
import { channelCard } from "./ChannelsCard"


export const Chanels = ({chanels}) =>{
    
    const navigate = useNavigate()

    const handleNavigateToChannel = (id) =>{
        navigate(`/channel${id}`)
    }


    return(
        <div className="channels-container">
            {chanels.map((c)=>(
                <channelCard
                key={c.id}
                id={c.id}
                title={c.title}
                username={c.username}
                isOnline={c.isOnline}
                avatarUrl={c.avatarUrl}
                navigateToChannelHandler={c.navigateToChannelHandler}
                
                
                
                />
            ))}



        </div>
    )
}