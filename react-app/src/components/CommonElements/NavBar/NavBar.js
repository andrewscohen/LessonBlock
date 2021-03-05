import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import {navBarButton} from "../../CreativeAssets/ComponentStyles";
import './NavBar.css';

const NavBar = ({authenticated, setAuthenticated}) => {
  const location = useLocation();
  const pathName = location.pathname.slice(1)

  return (
    <nav className="grid grid-cols-8 w-full fixed z-20 h-16">
        <div className="flex col-start-2 col-end-2 items-center justify-start">
          <NavLink to="/" exact={true} activeClassName="active" className="font-bold text-xl text-white">
            Logo
          </NavLink>
        </div>

        <div className="flex col-start-7 col-end-8 items-center justify-end">
          {!authenticated && (
          <NavLink to="/login" activeClassName="active" className={navBarButton}>
              LOGIN
          </NavLink>
          )}
          {authenticated && (
          <LogoutButton setAuthenticated={setAuthenticated} />
          )}
          </div>

    </nav>
  )};

export default NavBar;
