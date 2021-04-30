// PACKAGE IMPORTS
import { NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

// COMPONENT IMPORTS
import {LoginFormModal} from "../../Auth/"
import UserAvatarDropDown from "../UserAvatarDropDown";

// CSS STYLE IMPORT
import "./NavBar.css";

const NavBar = () => {
  const sessionUser = useSelector((state) => (state.session.user));

  return (
    <>
    {!sessionUser ? (
      <nav>
        {/* START OF NOT LOGGED IN NAVBAR LAYOUT */}
        <ul className="fixed z-50 flex items-center justify-center w-full h-20 shadow-sm mobile:justify-between bg-brand-blue mobile:bg-transparent desktop:h-16 laptop:h-14 widescreen:h-20 laptop:pr-14 laptop:pl-12 desktop:px-28 widescreen:px-40 mobile:h-14 mobile:px-10">
          <li>
            <NavLink to="/" exact={true} activeClassName="active" className="text-3xl font-bold laptop:text-xl desktop:py-3 desktop:text-2xl mobile:text-lg font-monst text-white-space">LessonBlock</NavLink>
          </li>
          <li>
            <LoginFormModal />
          </li>
        </ul>
        {/* END OF NOT LOGGED IN NAVBAR LAYOUT */}
      </nav>
    ) : (
      <nav>
      {/* START OF LOGGED IN NAVBAR LAYOUT */}
        <ul className="fixed z-50 flex items-center justify-center w-full h-20 shadow-sm mobile:justify-between bg-brand-blue mobile:bg-white desktop:h-16 laptop:h-14 widescreen:h-20 mobile:h-14 mobile:px-10">
          <li>
            <NavLink
              to="/dashboard"
              exact={true}
              activeClassName="active"
              className="pr-4 font-bold text-grey-200 hover:text-indigo-500">
                {`Hello, ${sessionUser.username}!`.toUpperCase()}
              </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              exact={true}
              activeClassName="active"
              className="block text-4xl font-bold hover:text-indigo-500 font-monst text-grey-200">
                LessonBlock
            </NavLink>
          </li>
          <li>
            <UserAvatarDropDown />
          </li>
        </ul>
        {/* END OF LOGGED IN NAVBAR LAYOUT */}
      </nav>
    )}

</>
  )};

export default NavBar;
