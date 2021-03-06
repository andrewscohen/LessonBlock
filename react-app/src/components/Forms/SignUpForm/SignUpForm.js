import React, { useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {signup, demoLogin, login} from '../../../store/reducers/user';
import {blackButtonStyle, whiteButtonStyle, formInputStyle} from '../formStyles'
import FormPageGradient from '../../../CreativeAssets/BackgroundImages/FormPageGradient.svg'

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [is_instructor, setIsInstructor] = useState(false);

  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(signup(username, email, password, is_instructor));
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const loginDemo = async (e) => {
    const user = await dispatch(demoLogin());
    setAuthenticated(true);
    dispatch(login(user));
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateUserType = (e) => {
    setIsInstructor(e.target.value)
  }

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="relative overflow-hidden h-screen">
      <img src={FormPageGradient} className="absolute h-full w-full object-cover" alt="SplashHeader"/>
      <div></div>
    <div className="container flex justify-center items-center h-screen mx-auto">
      <form onSubmit={onSignUp} className="w-4/12">
        <div>
          <label className="font-medium text-gray-900">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={updateUsername}
            className={formInputStyle}
            placeholder="Enter Your Username"
            required={true}></input>
        </div>
        <div className="relative">
          <label className="font-medium text-gray-900">Email</label>
          <input type="text"
                name="email"
              value={email}
              onChange={updateEmail}
              className={formInputStyle}
              placeholder="Enter Your Email Address"
              required={true} />
        </div>
        <div className="relative">
          <label className="font-medium text-gray-900">Password</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={updatePassword}
            className={formInputStyle}
            placeholder="Password" />
        </div>
        <div className="relative">
          <label className="font-medium text-gray-900">Confirm Password</label>
          <input
              type="password"
              value={repeatPassword}
              required={true}
              onChange={updateRepeatPassword}
              className={formInputStyle}
              placeholder="Password" />
        </div>
        <div className="flex">
          {/* <label className="border-solid border-black border-2 font-medium rounded-md px-4 py-4 m-2 text-xl"> */}
          <label className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease">
            <input
                type="radio"
                value={true}
                name="instructor"
                checked={is_instructor === true}
                onChange={updateUserType}
                // className="hidden"
              />
              Instructor
          </label>
          {/* <label className="relative border-solid border-black border-2 font-medium rounded-md px-4 py-4 m-2 text-xl"> */}
          <label className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease">
            <input
              type="radio"
              value={false}
              name="instructor"
              checked={is_instructor === false}
              onChange={updateUserType}
              // onClick={clickIt}
              // className="hidden"
            />
            Student
            </label>
        </div>
        <div className="relative">
          <button type="submit" className={blackButtonStyle}>Create Account</button>
          <button
            type='submit'
            className={whiteButtonStyle}
            onClick={loginDemo}
            >
            Demo User
          </button>
          <div className="flex">
            <Link path="/login">Already have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
};

export default SignUpForm;
