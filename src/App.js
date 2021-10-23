import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';
function App() {
  return (
    <div className="app">
      <Router>
        <>

        <Header/>
        <AppBody>
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
