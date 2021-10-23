import React from 'react'
import styled from 'styled-components';

function Message({ message , timestamp , user, userImage }) {
    return (
        <MessageContainer>
            <img
                alt="Channel Owner"
                src={userImage}
            />

            <MessageInfo>
                <h4>
                    {user}{" "}
                    <span></span>
                </h4>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message;

const MessageContainer = styled.div`

`;

const MessageInfo = styled.div`

`;
