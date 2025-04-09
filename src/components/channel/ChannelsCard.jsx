const imageUrl ='';

const ChannelAvatar = ({url})=>{
    return(
        <div className="channels-avatar-container">
            <img src={url || imageUrl} width='100%' alt="Defaut avatar"/>
        
        </div>
    )
}

export const channelCard =({
    title,
    id,
    username,
    isOnline,
    avataUrl,
    navigateToChannelHandler

}) =>{

    const handleNavigate = () =>{
        navigateToChannelHandler(id)
    }

    return(
        <div className="chanels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avataUrl}/>
            <span className="chanels-car-title">{title}</span>
            <span className="chanels-car-title">{username}</span>
            <span className="chanels-car-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'offline'}

            </span>

        </div>
    )
}