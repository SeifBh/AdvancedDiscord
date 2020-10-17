import React, { useEffect, useState } from 'react'
import "./Chat.css";
import ChatHeader from '../../components/chatHeader/ChatHeader';
import AddCircleIcon from  "@material-ui/icons/AddCircle";
import CardGiftcardIcon from  "@material-ui/icons/CardGiftcard";
import GifIcon from  "@material-ui/icons/Gif";
import EmojiEmotionsIcon from  "@material-ui/icons/EmojiEmotions";
import Message from '../../components/message/Message';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import db from '../../firebase';
import firebase from "firebase";


function Chat() {
    const user =useSelector(selectUser);
    const channelid=useSelector(selectChannelId);
    const channelName=useSelector(selectChannelName);
    const [input,setInput]=useState('');
    const [messages,setMessages]=useState([]);

    useEffect(() => { 
        if (channelid){
            db.collection('channels').doc(channelid).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot)=>setMessages(snapshot.docs.map((doc)=>doc.data())))

        }
      
       
    }, [channelid]);
    const sendMessage =(e)=>{
        e.preventDefault();

        db.collection("channels").doc(channelid).collection("messages").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user,
            message:input,
        })
        setInput("");

    }

    
    return (
        <div className="chat">
            
            <ChatHeader channelName={channelName}/>

            <div className="chat__messages">
                {messages.map((message)=>(
                     <Message timestamp={message.timestamp}message={message.message}user={message.user}/>

                ))}
               
               
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input disabled={!channelid} value={input} onChange ={(e)=> setInput(e.target.value)}placeholder={`Message # ${channelName}`}/>
                    <button  onClick={sendMessage}className="chat__inputbutton" type="submit">Send Message</button>
                </form>
                <div className="chat__inputicons">
                    <CardGiftcardIcon  fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>

            </div>
            
        </div>
    )
}

export default Chat
