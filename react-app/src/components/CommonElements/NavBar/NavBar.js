import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="grid grid-cols-8 w-full fixed z-20 h-16">
        <div className="flex col-start-2 col-end-2 items-center justify-start">
          <NavLink to="/" exact={true} activeClassName="active" className="font-bold text-xl text-white">
            Logo
          </NavLink>
        </div>

        <div className="flex col-start-7 col-end-8 items-center justify-end">
                    <NavLink to="/login" activeClassName="active" className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-8">
                        LOGIN
                    </NavLink>
          </div>
    </nav>
  )};

export default NavBar;
