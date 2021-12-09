import './SidebarOption.css'

import { useNavigate } from 'react-router-dom'
import db from './firebase';

function SidebarOption({Icon, title, id, addChannelOptions}) {

    // navigates to the fetched value, in this case id
    const navigate = useNavigate();

    const selectChannel = () => {
        if(id){
            navigate(`/room/${id}`);
        }else{
            navigate(title);
        }
    };

    const addChannel = () =>{
        const channelName = prompt('please enter the channel Name');
        if(channelName){
            db.collection('rooms').add({
                name:channelName
            }) 
        }
    };

    return (
        // if while clicking, add channel is clicked then add channel else, display channel 
        <div className="sidebarOption" onClick={addChannelOptions ? addChannel : selectChannel}>
            {/* if icon is passed -> display icon */}
            {Icon && <Icon className="sidebarOption__icon"/>}
            
            {/* if there is icon, display title -> else display just name */}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#{title}</span>
                </h3>
            )}
            {/* if add channel options, add new channel to db */}

        </div>
    );
}

export default SidebarOption
