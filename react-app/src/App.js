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
  MobileLoginForm
} from "./components";



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate()).then(() => {
      setLoaded(true);
    })}, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* Start Home */}
        <Route
          path="/"
          exact={true}
        >
          <LandingPage />
        </Route>
        {/* End Home */}

        {/* Start Mobile Login Form */}
        <Route
          path="/login"
          exact={true}
        >
         <MobileLoginForm />
        </Route>

        {/* Start All Users */}
        <ProtectedRoute
          path="/users"
          exact={true}
        >
          <UsersList/>
        </ProtectedRoute>
        {/* End All Uses */}

        {/* Start Single User */}
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
        >
          <User />
        </ProtectedRoute>
        {/* End Single User */}

        {/* Start Dashboard */}
        <ProtectedRoute
          path="/dashboard"
          exact={true}
        >
          <Dashboard />
        </ProtectedRoute>
        {/* End Dashboard */}

        {/* Start Instructor Section Builder*/}
        <ProtectedRoute
          path="/users/me/courses/:courseId"
          exact={true}
        >
          <SectionBuilder />
        </ProtectedRoute>
        {/* End Instructor Section Builder */}

        {/* Start Instructor Lesson Builder */}
        <ProtectedRoute
          path="/users/me/courses/:courseId/sections/:sectionId"
          exact={true}
        >
          <LessonBuilder />
        </ProtectedRoute>
        {/* End Instructor Lesson Builder */}

        {/* Start Student Course MarketPlace */}
        <ProtectedRoute
          path="/courses"
          exact={true}
         >
          <CourseMarket />
        </ProtectedRoute>
        {/* End Student Course MarketPlace */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
