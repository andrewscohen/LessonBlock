// PACKAGE IMPORTS
import { NavLink, useLocation } from "react-router-dom";
import {useSelector} from "react-redux";

// COMPONENT IMPORTS
import {LoginFormModal} from "../../Auth/"
import UserAvatarDropDown from "../UserAvatarDropDown";

// CSS STYLE IMPORT
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  const sessionUser = useSelector((state) => (state.session.user));

  return (
    <nav
      id={pathName !== "" ? "navBarChangeColor" : ""}
      className="fixed z-50 flex items-center justify-center w-full h-20 shadow-sm mobile:justify-between bg-brand-blue mobile:bg-transparent desktop:h-16 laptop:h-14 widescreen:h-20 laptop:pr-14 laptop:pl-12 desktop:px-28 widescreen:px-40 mobile:h-14 mobile:px-10"
    >
        {!sessionUser ? (
        <div>
          <NavLink to="/" exact={true} activeClassName="active" className="text-3xl font-bold laptop:text-xl desktop:py-3 desktop:text-2xl mobile:text-lg font-monst text-white-space">
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
          {!sessionUser && (
            <LoginFormModal />
          )}
          {sessionUser && (
            <>
            <NavLink to="/dashboard" exact={true} activeClassName="active" className="pr-4 font-bold text-grey-200 hover:text-indigo-500">{`Welcome, ${sessionUser.username}!`}
            </NavLink>
            <UserAvatarDropDown />
            </>
          )}
      </div>
    </nav>
  )};

export default NavBar;
