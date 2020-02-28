import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './pages/Users';
import NewPlace from './pages/NewPlace';
import UserPlaces from './pages/UserPlaces'
import MainNav from './components/Navigation/MainNav';
import UpdatePlace from './pages/UpdatePlace';

const App = () => {
  return (
    <Router>
      <MainNav />
      <main>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route exact path='/:userid/places'>
            <UserPlaces />
          </Route>
          <Route exact path="/places/new">
            <NewPlace />
          </Route>
          <Route exact path="/places/:pid">
            <UpdatePlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
};

export default App;
