import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import User from "./components/User"
import UsersList from "./components/UsersList";
// import {setUser} from "./store/session";
import {
  ProtectedRoute,
  NavBar,
  LandingPage,
  Dashboard

} from "./components";
import { authenticate } from "./store/session";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const user = await dispatch(authenticate());
      console.log("THIS IS THE USER: ", user)
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/" exact={true}>
          <LandingPage
          authenticated={authenticated}
          setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/dashboard" exact={true} authenticated={authenticated}  setAuthenticated={setAuthenticated}>
          <Dashboard
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
