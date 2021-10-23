import { FiberManualRecord } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2> Experience of nig</h2>
                    <h3>
                        <FiberManualRecord/>
                         Experience Iq
                    </h3>
                </SidebarInfo>
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`

`;

const SidebarHeader = styled.div`

`;
const SidebarInfo = styled.div`

`;