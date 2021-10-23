import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import styled from 'styled-components';
import firebase from 'firebase/compat/app';

function ChatInput({ channelId , channnelName}) {
   const[ input , setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

         if(!channelId) {
             return false;
         }

         db.collection("rooms").doc(channelId).collection("messages").add({
             message : input,
             timestamp :firebase.firestore.FieldValue.serverTimestamp(),
             user : "Experience i",
             userImage : "https://images.pexels.com/photos/9935198/pexels-photo-9935198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
         });

         setInput("");
    }


    return (
        <ChatInputContainer>
            <form>
                <input
                 onChange={ e => setInput(e.target.value)}
                 value={input}
                 placeholder={`Message #${channelId}`}/>
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;


const ChatInputContainer = styled.div`
   border-radius: 20px;

   > form {
       position: relative;
       display: flex;
       justify-content: center;
   }

   > form > input {
       position: fixed;
       bottom: 30px;
       width: 60%;
       border: 1px solid gray;
       border-radius: 3px;
       padding: 20px;
       outline: none;
   }

   > form > button {
          display:none !important;
   }
`;
