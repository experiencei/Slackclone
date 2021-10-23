import { Apps, BookmarkBorder, Create, Drafts, ExpandLess, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import SidebarOption from '../sidebarOption/SidebarOption';

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
                <Create/>
            </SidebarHeader>
            <SidebarOption Icon={InsertComment}  title="Threads"/>
            <SidebarOption Icon={Inbox}  title="Mentions & reactions"/>
            <SidebarOption Icon={Drafts}  title="Saved items"/>
            <SidebarOption Icon={BookmarkBorder}  title="Channel browser"/>
            <SidebarOption Icon={PeopleAlt}  title="People & user groups"/>
            <SidebarOption Icon={Apps}  title="Apps"/>
            <SidebarOption Icon={FileCopy}  title="File browser"/>
            <SidebarOption Icon={ExpandLess}  title="Show less"/>


        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top:  60px;
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom : 1px solid #49274b;
    /* padding-bottom :  10px; */
    padding: 13px;

    > .MuiSvgIcon-root {
          background-color: white;
          color: #49274b;
          padding:  8px;
          font-size: 18px;
          border-radius : 999px;
     }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
      font-size: 15px;
      font-weight: 900;
      margin-bottom: 5px;
  }


  > h3 {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 400;
  }


  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;