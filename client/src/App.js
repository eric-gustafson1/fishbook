import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './pages/Users';
import NewPlace from './pages/NewPlace';

const App = () => {
  return <Router>
    <Switch>

      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/places/new">
        <NewPlace />
      </Route>
      <Redirect to="/" />

    </Switch>
  </Router>
};

export default App;
