import React from 'react'
import './Message.css'

function Message({ messages,timestamp,user,userImage }) {

    // on the basis of room id, display the specific messages
    return (
        <div className="message">
            <img src={userImage} alt=""/>
            <div className="message__info">
                <h4>
                    {user}  
                    <span className="message__timestamp">
                         {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{messages}</p>
            </div>
        </div>
    );
}

export default Message
