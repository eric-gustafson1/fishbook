import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './pages/Users';
import NewPlace from './pages/NewPlace';
import UserPlaces from './pages/UserPlaces'
import MainNav from './components/Navigation/MainNav';
import UpdatePlace from './pages/UpdatePlace';
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
        <Route exact path='/:userid/places'>
          <UserPlaces />
        </Route>
        <Route exact path="/places/new">
          <NewPlace />
        </Route>
        <Route exact path="/places/:pid">
          <UpdatePlace />
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
        <Route exact path='/:userid/places'>
          <UserPlaces />
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
