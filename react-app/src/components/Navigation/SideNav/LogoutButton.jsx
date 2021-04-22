// PACKAGE IMPORTS
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";

// REDUX IMPORTS FROM STORE
import { logout } from "../../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    history.push("/")
    await dispatch(logout());
  };

  return (
    <button onClick={onLogout} className="relative flex flex-row items-center w-full pr-6 text-gray-600 border-l-4 border-transparent h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500">
      <span className="inline-flex items-center justify-center ml-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
      </span>
      <span className="ml-2 text-2xl tracking-wide truncate">Logout</span>
    </button>
  )
}
export default LogoutButton;
