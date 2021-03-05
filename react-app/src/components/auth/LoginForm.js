import React, { useState } from "react";
import {useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../services/auth";
import {setUser} from '../../store/session'

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      dispatchEvent(setUser(user))
      setAuthenticated(true);
      history.push('/')
    } else {
      setErrors(user.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const demoUser = await login('demo@aa.io', 'password');
    if (!demoUser.errors) {
      dispatch(setUser(demoUser))
      setAuthenticated(true);
      history.push("/");
    } else {
      setErrors(demoUser.errors);
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  const inputStyle = 'block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50" placeholder="Enter Your Username or Email'

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
                    className={inputStyle}
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
                    className={inputStyle} />
            </div>
            <div className="relative">
                <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black rounded-lg hover:bg-gray-700 ease">Log In</button>
                <button
                    type="submit"
                    onClick={demoLogin}
                    className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease">Demo User</button>
            </div>
        </div>
    </form>
    </div>
  );
};


export default LoginForm;
