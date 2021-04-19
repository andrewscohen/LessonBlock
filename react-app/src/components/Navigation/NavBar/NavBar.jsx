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
      className="fixed z-50 items-center justify-between hidden w-full shadow-sm desktop:h-16 laptop:h-14 widescreen:h-20 laptop:pr-14 laptop:pl-12 desktop:px-28 widescreen:px-40 mobile:h-14 mobile:px-10 mobile:flex"
    >
        {!authenticated ? (
        <div>
          <NavLink to="/" exact={true} activeClassName="active" className="font-bold laptop:text-xl desktop:py-3 desktop:text-2xl mobile:text-lg font-monst text-white-space">
            LessonBlock
          </NavLink>
          </div>
        ) : (
          <div>
          <NavLink to="/dashboard" exact={true} activeClassName="active" className="block py-3 text-4xl font-bold hover:text-indigo-500 font-monst col-start text-grey-200">
            LessonBlock
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
