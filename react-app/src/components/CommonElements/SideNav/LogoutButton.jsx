import React from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
import { logout } from "../../../store/session";

const LogoutButton = ({setAuthenticated, authenticated}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    setAuthenticated(false);
    history.push("/")
    await dispatch(logout());
  };

  return (
    <button onClick={onLogout} className="relative flex flex-row items-center w-full h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
      <span className="inline-flex justify-center items-center ml-4">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
      </span>
      <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
    </button>
  )
}
export default LogoutButton;
