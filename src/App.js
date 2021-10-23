import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Router>
        <>


        <Switch>
          {/* <Route path="/about">
            <About/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route> */}
          <Route exact path="/">
            {/* <Home/> */}
            <h1>Hello yihua</h1>
          </Route>
        </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
