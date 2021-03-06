import React, { useState } from "react";
import {useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {login, demoLogin} from '../../../store/reducers/user';
import {blackButtonStyle, whiteButtonStyle, formInputStyle} from '../formStyles';
// import FormPageGradient from '../../CreativeAssets/BackgroundImages/FormPageGradient.svg'


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
    return <Redirect to="/" />;
  }


  return (
    <div className="relative overflow-hidden h-screen">
        {/* <img src={FormPageGradient} className="absolute h-full w-full object-cover" alt="SplashHeader"/> */}
    <div>
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
    <div className="md:flex w-full">
    <div className="container flex justify-center items-center h-screen mx-auto">
    <form onSubmit={onLogin} className="w-4/12 ">
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
                  type='submit'
                  className={whiteButtonStyle}
                  onClick={loginDemo}
                  >
                  Demo User
                  </button>
            </div>
            <div className="flex justify-between">
            <Link path="/signup">Don't have an account?</Link>
            <Link path="/signup">Forgot Password?</Link>
          </div>
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  );
};


export default LoginForm;
