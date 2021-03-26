import React from "react";
import {useSelector} from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import LoginFormModal from "../../Auth/LoginFormModal"
import ProfileButton from "../ProfileButton";
import "./NavBar.css";

const NavBar = ({authenticated, setAuthenticated}) => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  const sessionUser = useSelector((state) => (state.session.user));

  return (
    <nav className="fixed z-50 grid w-full h-20 grid-cols-8 shadow-sm" id={pathName !== "" ? "navBarChangeColor" : ""}>
        {!authenticated ? (
        <div className="flex items-center content-center justify-end col-span-1 col-start-2 ml-1">
          <NavLink to="/" exact={true} activeClassName="active" className="py-3 text-2xl font-bold font-monst text-white-space">
            Lesson Block
          </NavLink>
          </div>
        ) : (
          <div className="flex items-center content-center justify-center col-span-2 col-start-4 ml-1">
          <NavLink to="/dashboard" exact={true} activeClassName="active" className="block py-3 text-4xl font-bold hover:text-indigo-500 font-monst col-start text-grey-200">
            Lesson Block
          </NavLink>
          </div>
        )}

        <div className="flex items-center content-center justify-end col-start-7 col-end-8">
          {!authenticated && (
            <LoginFormModal authenticated={authenticated} setAuthenticated={setAuthenticated}/>
          )}
          {authenticated && (
            <>
            <NavLink to="/dashboard" exact={true} activeClassName="active" className="pr-4 font-bold text-grey-200 hover:text-indigo-500">{`Welcome, ${sessionUser.username}!`}
            </NavLink>
            <ProfileButton />
            </>
          )}
      </div>
    </nav>
  )};

export default NavBar;
