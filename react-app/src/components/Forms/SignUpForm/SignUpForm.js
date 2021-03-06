import React, { useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {signup, demoLogin, login} from '../../../store/reducers/user';
import {blackButtonStyle, whiteButtonStyle, formInputStyle, radioButtonStyle} from '../formStyles'
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
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="relative overflow-hidden h-screen" style={{backgroundImage: `url(${FormPageGradient})`, backgroundSize: 'cover', height: '100vh'}}>
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
        <div className="flex mt-6 mb-6">
          <label className={radioButtonStyle}>
            <input
                type="radio"
                value={true}
                name="instructor"
                checked={is_instructor === true}
                onChange={updateUserType}
              />
              Instructor
          </label>
          <label className={radioButtonStyle}>
            <input
              type="radio"
              value={false}
              name="instructor"
              checked={is_instructor === false}
              onChange={updateUserType}
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
