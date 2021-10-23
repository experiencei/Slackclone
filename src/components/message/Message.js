import React from 'react'
import styled from 'styled-components';

function Message({ message , timestamp , userv, userImage }) {
    return (
        <MessageContainer>
            <img
                alt="Channel Owner"
                src={userImage}
            />
        </MessageContainer>
    )
}

export default Message;

const MessageContainer = styled.div`

`;
