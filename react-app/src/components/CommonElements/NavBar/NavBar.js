import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import {navBarButton} from "../../../CreativeAssets/ComponentStyles";
// import LessonBlockLogo from "../../../CreativeAssets/Icons/LessonBlockLogo.svg"
import './NavBar.css';

const NavBar = ({authenticated, setAuthenticated}) => {
  const location = useLocation();
  // const pathName = location.pathname.slice(1)

  return (
    <nav className="grid grid-cols-8 w-full fixed z-20 h-16">
        <div className="flex col-start-2 col-span-1 items-end content-end justify-end ml-1">
          <NavLink to="/" exact={true} activeClassName="active" className="font-monst font-bold text-2xl py-3 text-white-space">
            Lesson Block
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
