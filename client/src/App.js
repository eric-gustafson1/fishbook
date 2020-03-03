import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './pages/Users';
import NewTrip from './pages/NewTrip';
import UserTrips from './pages/UserTrips'
import MainNav from './components/Navigation/MainNav';
import UpdateTrips from './pages/UpdateTrips';
import Auth from './pages/Auth';
import { AuthContext } from './components/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, []);

  let routes;

  if (isLoggedIn) {
    //Routes available if logged in
    routes = (
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path='/:userid/trips'>
          <UserTrips />
        </Route>
        <Route exact path="/trips/new">
          <NewTrip />
        </Route>
        <Route exact path="/trips/:pid">
          <UpdateTrips />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  } else {
    //Routes available if NOT logged in
    routes = (
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path='/:userid/trips'>
          <UserTrips />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Redirect to='/auth' />
      </Switch>
    );
  }


  return (
    <AuthContext.Provider value={
      {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
      }
    }>
      <Router>
        <MainNav />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  )
};

export default App;
