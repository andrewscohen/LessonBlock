import React, { useState } from "react";
import {useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {blackButtonStyle, whiteButtonStyle, formInputStyle} from "../formStyles";
import {login, demoLogin} from "../../../store/reducers/user";
import FormPageGradient from "../../../assets/BackgroundImages/FormPageGradient.svg";
import DesignerAtNight from "../../../assets/Icons/DesignerAtNight.png";


const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login({email, password}));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };


  const loginDemo = async (e) => {
    const user = await dispatch(demoLogin());
    setAuthenticated(true);
    dispatch(login(user));
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
    <div className="relative overflow-hidden h-screen" style={{backgroundImage: `url(${FormPageGradient})`, backgroundSize: "cover", height: "100vh"}}>
    <div className="container flex justify-end items-center h-screen mx-auto">
    <div className="w-6/12 h-2/3 bg-brand-tan flex flex-col justify-center items-center rounded-l-md">
        <h1 className="text-5xl font-bold text-white-space">Welcome back!</h1>
        <img src={DesignerAtNight} alt="Designer At Night"/>
    </div>
    <div className="w-6/12 h-2/3 bg-white-space flex flex-col justify-center items-center rounded-r-md">
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
                  onClick={loginDemo}
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
    </div>

  );
};


export default LoginForm;
