import React, { useState } from "react";
import {useDispatch } from "react-redux";
import { Redirect, Link, useHistory } from "react-router-dom";
import {login} from "../../../store/session";
import login_img from "./login_img.jpg"


const whiteButtonStyle = "inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const blackButtonStyle = "inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease"
const formInputStyle = "block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"


const LoginForm = ({ authenticated, setAuthenticated, setShowLoginModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
      setShowLoginModal(false);
      history.push('/dashboard')
    } else {
      setErrors(user.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login("demo@aa.io", "password"));
    setAuthenticated(true)
    history.push("/dashboard")
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }


  return (
    <div className="container flex justify-end h-screen mt-96">
      <div className="absolute object-right-top pt-5 pr-8">
        <button type="button" onClick={() => setShowLoginModal(false)}>
          <i className="fas fa-window-close"></i>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-6/12 overflow-hidden h-2/3 bg-brand-tan rounded-l-md">
          <img src={login_img} alt="people gazing at a wall of online lesson screens"className="h-screen"/>
      </div>
    <div className="flex flex-col items-center justify-center w-6/12 h-2/3 bg-white-space rounded-r-md">
    <h1 className="pb-12 mt-12 font-serif text-6xl font-bold leading-tight text-black sm:text-7xl">
                    Welcome Back!
                </h1>
      <form onSubmit={onLogin} className="w-6/12 pb-10">
        <div className="relative w-full space-y-4">
            <div className="relative">
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label htmlFor="email" className="font-medium text-gray-900">Email</label>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={updateEmail}
                    className={formInputStyle}
                />
            </div>
            <div className="relative">
                <label htmlFor="password" className="font-medium text-gray-900">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updatePassword}
                    className={formInputStyle} />
            </div>
            <div className="relative">
                <button type="submit" className={blackButtonStyle}>Log In</button>
                  <button
                  type="submit"
                  className={whiteButtonStyle}
                  onClick={demoLogin}
                  >
                  Demo User
                  </button>
            </div>
            <div className="flex justify-between">
            <Link to="/sign-up">Don't have an account?</Link>
            <Link to="/sign-up">Forgot Password?</Link>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};


export default LoginForm;
