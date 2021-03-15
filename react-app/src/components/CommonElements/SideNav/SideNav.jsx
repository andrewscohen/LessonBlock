import React from "react";
import {Link} from "react-router-dom";
import CreateUserCourseButton from "./CreateUserCourseButton";
import LogoutButton from "./LogoutButton";

const SideNav = ({setAuthenticated, authenticated}) => {

    return (
      <div className='grid grid-cols-12 w-full h-screen pt-20 bg-white-space'>
        <div className="relative col-start-3 col-end-5 h-full border-r-2">
          <div className="flex-auto flex-col items-center justify-center h-full">
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-6">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-2xl font-light tracking-wide text-gray-500">MY STUFF</div>
                </div>
              </li>
              <li>
                <Link to="/dashboard" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </span>
                  <span className="ml-2 text-2xl tracking-wide truncate">Dashboard</span>
                </Link>
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-2xl font-light tracking-wide text-gray-500">COURSES</div>
                </div>
              </li>
              <li>
                <CreateUserCourseButton />
              </li>
              <li>
                <LogoutButton authenticated={authenticated}  setAuthenticated={setAuthenticated} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  };

export default SideNav;
