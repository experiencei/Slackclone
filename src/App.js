import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Router>
        <>


        <Switch>
          <Route exact path="/">
            <Header/>
          </Route>
        </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
