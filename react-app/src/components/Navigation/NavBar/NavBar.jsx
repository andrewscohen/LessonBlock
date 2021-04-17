// PACKAGE IMPORTS
import { NavLink, useLocation } from "react-router-dom";
import {useSelector} from "react-redux";

// COMPONENT IMPORTS
import LoginFormModal from "../../Auth/LoginFormModal"
import UserAvatarDropDown from "../UserAvatarDropDown";

// CSS STYLE IMPORT
import "./NavBar.css";

const NavBar = ({authenticated, setAuthenticated}) => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  const sessionUser = useSelector((state) => (state.session.user));

  return (
    <nav
      id={pathName !== "" ? "navBarChangeColor" : ""}
      // className="fixed z-50 grid items-center w-full h-20 grid-cols-8 shadow-sm"
      className="fixed z-50 flex items-center justify-between w-full shadow-sm desktop:h-16 laptop:h-14 widescreen:h-20 laptop:px-20 desktop:px-28 widescreen:px-40"
    >
        {!authenticated ? (
        <div>
          <NavLink to="/" exact={true} activeClassName="active" className="py-3 text-2xl font-bold font-monst text-white-space">
            Lesson Block
          </NavLink>
          </div>
        ) : (
          <div>
          <NavLink to="/dashboard" exact={true} activeClassName="active" className="block py-3 text-4xl font-bold hover:text-indigo-500 font-monst col-start text-grey-200">
            Lesson Block
          </NavLink>
          </div>
        )}
        <div>
          {!authenticated && (
            <LoginFormModal authenticated={authenticated} setAuthenticated={setAuthenticated}/>
          )}
          {authenticated && (
            <>
            <NavLink to="/dashboard" exact={true} activeClassName="active" className="pr-4 font-bold text-grey-200 hover:text-indigo-500">{`Welcome, ${sessionUser.username}!`}
            </NavLink>
            <UserAvatarDropDown
              authenticated={authenticated}
              setAuthenticated={setAuthenticated} />
            </>
          )}
      </div>
    </nav>
  )};

export default NavBar;
