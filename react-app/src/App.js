import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import User from "./components/User"
import UsersList from "./components/UsersList";
import {
  ProtectedRoute,
  NavBar,
  LandingPage,
  Dashboard,
  CourseMarket,
  LessonBuilder,
  SectionBuilder,
} from "./components";



function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const user = await dispatch(authenticate());
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
        {/* Start Home */}
        <Route
          path="/"
          exact={true}
        >
          <LandingPage
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          />
        </Route>
        {/* End Home */}

        {/* Start All Users */}
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList/>
        </ProtectedRoute>
        {/* End All Uses */}

        {/* Start Single User */}
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        {/* End Single User */}

        {/* Start Dashboard */}
        <ProtectedRoute
          path="/dashboard"
          exact={true}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        >
          <Dashboard
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </ProtectedRoute>
        {/* End Dashboard */}

        {/* Start Instructor Section Builder*/}
        <ProtectedRoute
          path="/users/me/courses/:courseId"
          exact={true}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        >
          <SectionBuilder
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </ProtectedRoute>
        {/* End Instructor Section Builder */}

        {/* Start Instructor Lesson Builder */}
        <ProtectedRoute
          path="/users/me/courses/:courseId/sections/:sectionId"
          exact={true}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        >
          <LessonBuilder
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </ProtectedRoute>
        {/* End Instructor Lesson Builder */}

        {/* Start Student Course MarketPlace */}
        <ProtectedRoute
          path="/courses"
          exact={true}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
         >
          <CourseMarket
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </ProtectedRoute>
        {/* End Student Course MarketPlace */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
