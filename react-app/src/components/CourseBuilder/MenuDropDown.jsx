import React, {useState, useEffect} from "react";
import CreateSectionModal from "./CreateSection/";
import UpdateCourseModal from "./UpdateCourse/";
import DeleteAlert from "./DeleteAlert";

const buttonStyle = "flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500";

const listItemStyle = "block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 font-semibold"


const MenuDropDown = ({course, currentCourse, deleteThisCourse}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    // Toggles open and closed the Controls Drop Down
    // const toggleDropDown = () => {
    //     displayControls === false ? setDisplayControls(true) : setDisplayControls(false);
    // }

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

    return (
        <div className="relative">
          <div>
            <button
                className={buttonStyle}
                id="options-menu"
                type="button"
                onClick={openMenu}
            >
              Controls
                <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
                    />
                </svg>
            </button>
          </div>
          {showMenu && (
          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5" id="dropdown-control">
            <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <span className="flex flex-col">
                    <span>
                        <CreateSectionModal course={course} id="options-menu"/>
                    </span>
                </span>
                <span className="flex flex-col">
                    <span>
                        <UpdateCourseModal currentCourse={currentCourse} id="options-menu"/>
                    </span>
                </span>
                <span className="flex flex-col">
                    <button
                        className={listItemStyle}
                        type="button"
                        onClick={() => setOpenAlert(true)}
                    >
                        <span>Delete This Course</span>
                    </button>
                    {openAlert ? (
                        <DeleteAlert deleteThisCourse={deleteThisCourse} setOpenAlert={setOpenAlert} id="options-menu"/>
                    ) : null}
                </span>
            </div>
          </div>
          )}
        </div>
      );
    };

export default MenuDropDown;
