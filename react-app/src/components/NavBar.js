import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = ({ setAuthenticated, authenticated, setDisplay }) => {
  return (
    <nav className="navBarContainer">
        <div className="leftFraction">
          {!authenticated &&
          <NavLink to="/" exact={true} activeClassName="active">
            Logo
          </NavLink>}
        </div>
        <div className="rightFraction">
        {!authenticated && (
        <div>
         <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
          </div>
        )}
        </div>
        {/* <div>
          {authenticated && (
          <div>
          <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
          )}
          </div> */}
    </nav>
  )};

export default NavBar;
