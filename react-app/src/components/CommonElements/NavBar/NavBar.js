import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="navBarContainer">
        <div className="leftFraction">
          <NavLink to="/" exact={true} activeClassName="active">
            Logo
          </NavLink>
        </div>
        <div className="rightFraction">
         <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
          <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
    </nav>
  )};

export default NavBar;
