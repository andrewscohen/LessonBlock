import React, { useState } from "react";
import {useDispatch } from "react-redux";
import { Redirect, Link, useHistory } from "react-router-dom";
import {blackButtonStyle, whiteButtonStyle, formInputStyle} from "../FormAssets/formStyles";
import {login} from "../../../store/session";
import login_img from "./login_img.jpg"

const LoginForm = ({ authenticated, setAuthenticated, setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
      setShowModal(false);
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
    <div className="container flex justify-end items-center h-screen mx-auto">
      <div className="w-6/12 h-2/3 bg-brand-tan flex flex-col justify-center items-center rounded-l-md overflow-hidden">
          <img src={login_img} alt="people gazing at a wall of online lesson screens"/>
      </div>
    <div className="w-6/12 h-2/3 bg-white-space flex flex-col justify-center items-center rounded-r-md">
      <div>
        <button type="button" onClick={() => setShowModal(false)} >
          <i className="fas fa-window-close"></i>
        </button>
      </div>
      <form onSubmit={onLogin} className="w-6/12">
        <div className="relative w-full mt-10 space-y-8">
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
            <Link to="/sign-up">Don"t have an account?</Link>
            <Link to="/sign-up">Forgot Password?</Link>
          </div>
        </div>
      </form>
    </div>
    </div>
    // </div>

  );
};


export default LoginForm;
