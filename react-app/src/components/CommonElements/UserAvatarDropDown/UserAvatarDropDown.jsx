import React, { useState} from "react";
import { useSelector } from "react-redux";
// import LogoutButton from "../auth/LogoutButton";

const buttonStyle = "w-12 h-12 rounded-full";

const UserAvatarDropDown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);


  // Toggles open and closed the Controls Drop Down
  const toggleDropDown = () => {
      showMenu === false ? setShowMenu(true) : setShowMenu(false);
  }
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
                      Woot!
                  </span>
              </span>
              <span className="flex flex-col">
                  <span>
                      Goodbye!
                  </span>
              </span>
              <span className="flex flex-col">
                  <span>Hi!</span>

              </span>
          </div>
        </div>
        )}
      </div>
    );
  };

export default UserAvatarDropDown;
