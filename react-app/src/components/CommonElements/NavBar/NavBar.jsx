import React from "react";
import {useSelector} from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import LoginModal from "../../Forms/LoginForm/"

// const navBarButton = "block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase"

const NavBar = ({authenticated, setAuthenticated}) => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  console.log("This is the path: ", pathName)
  const sessionUser = useSelector((state) => (state.session.user));


  return (
    <nav className="grid grid-cols-8 w-full z-10 fixed h-20 shadow-sm" id={pathName !== "" ? "navBarChangeColor" : ""}>
        {!authenticated ? (
        <div className="flex col-start-2 col-span-1 items-center content-center justify-end ml-1">
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
            <LoginModal authenticated={authenticated} setAuthenticated={setAuthenticated}/>
          // <NavLink to="/login" activeClassName="active" className={navBarButton}>
          //     LOGIN
          // </NavLink>
          )}
          {authenticated && (
            <NavLink to="/dashboard" exact={true} activeClassName="active" className="text-white">{`Welcome, ${sessionUser.username}!`}</NavLink>
            )}
            </div>
    </nav>
  )};

export default NavBar;
