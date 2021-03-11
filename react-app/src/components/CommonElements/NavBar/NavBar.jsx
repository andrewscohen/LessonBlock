import React from "react";
import {useSelector} from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import {navBarButton} from "../../../assets/ComponentStyles";
import "./NavBar.css";

const NavBar = ({authenticated, setAuthenticated, setDisplay}) => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  console.log("This is the path: ", pathName)
  const sessionUser = useSelector((state) => (state.session.user));


  return (
    <nav className="grid grid-cols-8 w-full z-10 fixed h-16" id={pathName !== "" ? "navBarChangeColor" : ""}>
        {!authenticated ? (
        <div className="flex col-start-2 col-span-1 items-end content-end justify-end ml-1">
          <NavLink to="/" exact={true} activeClassName="active" className="font-monst font-bold text-2xl py-3 text-white-space">
            Lesson Block
          </NavLink>
          </div>
        ) : (
          <div className="flex col-start-4 col-span-2 items-center content-center justify-center ml-1">
          <NavLink to="/dashboard" exact={true} activeClassName="active" className="block font-monst font-bold col-start text-2xl py-3 text-gray-50">
            Lesson Block
          </NavLink>
          </div>
        )}

        <div className="flex col-start-7 col-end-8 items-center justify-end">
          {!authenticated && (
          <NavLink to="/login" activeClassName="active" className={navBarButton}>
              LOGIN
          </NavLink>
          )}
          {authenticated && (
            <NavLink to="/dashboard" exact={true} activeClassName="active" className="text-white">{`Welcome, ${sessionUser.username}!`}</NavLink>
            )}
            </div>
    </nav>
  )};

export default NavBar;
