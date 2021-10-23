import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import Chat from './components/chat/Chat';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useAuthState }  from "react-firebase-hooks/auth";
import { auth } from './components/firebase/firebase';
import Login from './components/login/Login';


function App() {
  const [ user , loading] = useAuthState(auth)
   if (loading) {
     return (
        <AppLoading>
             <AppLoadingContent>
                 <img 
                    src="https://cdn.mos.cms.futurecdn.net/
                    SDDw7CnuoUGax6x9mTo7dd.jpg"
                    alt="slack"
                 />
             </AppLoadingContent>
        </AppLoading>
     )
   }
  return (
    <div className="app">
      <Router>
      {!user ? (
        <Login/>
      ) : (
        <>
   
   <Header/>
   <AppBody>
     <Sidebar/>
     <Switch>
       <Route exact path="/">
          <Chat/>
       </Route>
     </Switch>
   </AppBody>
  
   </>
      ) }
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
   display: flex;
   height: 100vh;
`;

const AppLoadingContent = styled.div`

`;
const AppLoading = styled.div`

`;