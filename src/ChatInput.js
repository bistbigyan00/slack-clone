import {useState} from 'react'
import React from 'react'
import './ChatInput.css'
import db from './firebase'
import firebase from 'firebase'
import {useStateValue} from './StateProvider'

function ChatInput({channelName, channelId}) {
    // grab user from datalayer
    const [{user}] = useStateValue();
    // to store the input
    const [input, setInput] = useState('');

    const sendMessage = (e) =>{
        e.preventDefault();

        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                messages:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user:user.displayName,
                userImage:user.photoURL
            })
        }
        setInput('');
    }

    return (
        <div className='chatInput'>
            <form action="">
                {/* tracks the change while typing input */}
                <input  
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder={`Message #${channelName ?.toLowerCase()}`}/>
                <button type='submit' onClick={sendMessage} >
                    SEND
                </button>
            </form>
        </div>
    )
}

export default ChatInput
