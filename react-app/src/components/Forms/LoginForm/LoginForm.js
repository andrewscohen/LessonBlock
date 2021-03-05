import React, { useState } from "react";
import {useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {login, demoLogin} from '../../../store/reducers/user';
import {blackButtonStyle, whiteButtonStyle, formInputStyle} from '../formStyles';

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
        </div>
    </form>
    </div>
  );
};


export default LoginForm;
