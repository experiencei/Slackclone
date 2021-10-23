import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    <div className="app">
      <Router>
        <>

        <Header/>
        <AppBody>
          <Sidebar/>
          <Switch>
            <Route exact path="/">
              
            </Route>
          </Switch>
        </AppBody>
       
        </>
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
   
`