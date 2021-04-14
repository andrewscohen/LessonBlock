// PACKAGE IMPORTS
import { useState} from "react";
import {useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// REDUX IMPORTS FROM STORE
import { logout } from "../../../store/session";

const buttonStyle = "w-12 h-12 rounded-full";

// TAILWIND STYLES
const listItemStyle = "block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 font-semibold w-full";

const UserAvatarDropDown = ({setAuthenticated, authenticated}) => {
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  // Toggles open and closed the Controls Drop Down
  const toggleDropDown = () => {
      showMenu === false ? setShowMenu(true) : setShowMenu(false);
  }

  // Logs out currentUser
  const userLogout = async (e) => {
    setAuthenticated(false);
    history.push("/")
    await dispatch(logout());
  };

  return (
      <div className="relative">
        <div>
          <button
              className={buttonStyle}
              id="options-menu"
              type="button"
              onClick={toggleDropDown}
          >
            <img className={buttonStyle} alt="avatar" src={sessionUser.profile_img} />
          </button>
        </div>
        {showMenu && (
        <div className="absolute right-0 w-56 mt-5 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5" id="dropdown-control">
          <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <span className="flex flex-col">
                  <span>
                      <button
                        type="button"
                        onClick={userLogout}
                      >
                        <span className={listItemStyle}>
                        Logout</span>
                      </button>
                  </span>
              </span>
          </div>
        </div>
        )}
      </div>
    );
  };

export default UserAvatarDropDown;
