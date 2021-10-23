import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components'


function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <Avatar/>
            </HeaderLeft>
        </HeaderContainer>
    )
}

export default Header;


const HeaderContainer = styled.div`
  color: red;

`;

const HeaderLeft = styled.div`
    
`;

const HeaderAvatar = styled(Avatar)``
