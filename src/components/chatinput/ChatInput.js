import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

function ChatInput({ channelId , channnelName}) {
    const sendMessage = (e) => {
        e.preventDefault();

    }


    return (
        <ChatInputContainer>
            <form>
                <input  placeholder={`Message #${channelId}`}/>
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
`;
