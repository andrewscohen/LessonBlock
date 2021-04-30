// PACKAGE IMPORTS
import { useState} from "react";
import {useHistory, Redirect} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// REDUX IMPORTS FROM STORE
import { login, logout } from "../../../store/session";

// TAILWIND STYLES
const buttonStyle = "w-12 h-12 rounded-full";
const listItemStyle = "block w-full px-4 py-2 font-semibold text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600";

const UserAvatarDropDown = () => {
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
    history.push("/")
    await dispatch(logout());
  };

    // Logs out currentUser
    const userSwitch = async (e) => {
      if (sessionUser.email === "instructor@lessonblock.io") {
        setTimeout(await dispatch(login("student@lessonblock.io", "719cfc7c-8a95-48ef-91ec-c6425790245f")), 1000);
      } else {
        setTimeout(await dispatch(login("instructor@lessonblock.io", "8b4c7b0a-b365-4420-ae67-8f310c872054")), 1000);
      }
      toggleDropDown()
    };

  return (
      <div className="relative">
          {/* Start User Avatar Image Button */}
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
        {/* End User Avatar Image Button */}
        {/* Start Dropdown Menu That Comes from Clicking User Avatar Image Button */}
        {showMenu && (
          <div className="absolute right-0 w-56 mt-5 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5" id="dropdown-control">
            <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <ul className="flex flex-col">
                {/* Start Logout Button */}
                <li>
                  <button
                    type="button"
                    onClick={userLogout}
                    className={listItemStyle}
                  >
                    Logout
                  </button>
                </li>
                {/* End Logout Button */}
                {/* Start User Switch Button: Button will only render for demo accounts and switch conditionally if demo is instructor account or student account*/}
                {(sessionUser.email === "instructor@lessonblock.io") || (sessionUser.email === "student@lessonblock.io")  ? (
                  <li>
                    <button
                      type="button"
                      onClick={userSwitch}
                      className={listItemStyle}
                    >
                      {(sessionUser.email === "instructor@lessonblock.io") ?
                        (`Switch to Student View`) : (`Switch to Instructor View`)
                      }
                    </button>
                  </li>
                ) : null}
                {/* End User Switch Button */}
              </ul>
            </div>
          </div>
        )}
        {/* End Dropdown Menu That Comes from Clicking User Avatar Image Button */}
      </div>
    );
  };

export default UserAvatarDropDown;
