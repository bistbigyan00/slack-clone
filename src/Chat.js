import React, {useEffect, useState} from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput'


function Chat() {
    //using useParams hook, to get the roomId from url path
    const { roomId } = useParams();
    // store room Name
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessage,setRoomMessage] = useState([]);

    //run this component once if room id is changed
    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId)
                .onSnapshot((snapshot)=>{
                setRoomDetails(snapshot.data())
            })

            db.collection('rooms').doc(roomId)
                .collection('messages')
                .orderBy('timestamp','asc')
                .onSnapshot((snapshot)=>{
                    setRoomMessage(
                        snapshot.docs.map((doc)=>doc.data())
                    );
            })
        }
    }, [roomId])  

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        {/* initially when it runs, room details is null and after it runs roomdetails ahs value, so we checking if roomdetails, then display name */}
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />  
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {roomMessage.map((messageData)=>(
                    <Message 
                        messages = {messageData.messages}
                        timestamp = {messageData.timestamp}
                        user = {messageData.user}
                        userImage = {messageData.userImage}
                    />
                ))}
            </div>
            
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />

        </div>
    );
}

export default Chat;
