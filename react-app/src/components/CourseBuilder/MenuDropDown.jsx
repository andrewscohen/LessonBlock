import React, {useState} from "react";

const buttonStyle = "flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500";

const MenuDropDown = () => {
    const [displayControls, setDisplayControls] = useState(false);

    const toggleDropDown = () => {
        displayControls === false ? setDisplayControls(true) : setDisplayControls(false);
    }
    return (
        <div className="relative inline-block text-left">
          <div>
            <button
                className={buttonStyle}
                id="options-menu"
                type="button"
                onClick={toggleDropDown}
            >
              Controls
              <svg width={20} height={20} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                </path>
              </svg>
            </button>
          </div>
          {displayControls && (
          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="/" className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                  <span>
                    Stripe
                  </span>
                </span>
              </a>
              <a href="/" className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                  <span>
                    Mastercard
                  </span>
                </span>
              </a>
              <a href="/" className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                  <span>
                    Paypal
                  </span>
                </span>
              </a>
            </div>
          </div>
          )}
        </div>
      );
    };

export default MenuDropDown;
