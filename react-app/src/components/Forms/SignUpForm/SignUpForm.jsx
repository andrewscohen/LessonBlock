import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {signup, login} from "../../../store/session";
import sign_up_img from "./sign_up_img.jpg"

const whiteButtonStyle = "inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const blackButtonStyle = "inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease"
const formInputStyle = "block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"
const radioButtonStyle = "z-20 inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease"



const SignUpForm = ({authenticated, setAuthenticated, setShowLoginModal}) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [is_instructor, setIsInstructor] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(signup(username, email, password, is_instructor));
      if (!user.errors) {
        setAuthenticated(true);
        history.push('/dashboard')
      } else {
        setErrors(user.errors);
      }
    };
  };


  const demoLogin = async (e) => {
    e.preventDefault();
    setTimeout(await dispatch(login("demo@aa.io", "password")), 1000);
    setAuthenticated(true)
    history.push("/dashboard")
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
    // <div className="container flex justify-end items-center h-screen mx-auto">
<div className="container flex justify-end mt-96 h-screen">
<div className="absolute object-right-top pr-8 pt-5">
        <button type="button" onClick={() => setShowModal(false)}>
          <i className="fas fa-window-close"></i>
        </button>
      </div>
    <div className="w-6/12 h-3/4 bg-brand-tan flex flex-col justify-center items-center rounded-l-md overflow-hidden">
      <div className="h-full w-full">
        <img src={sign_up_img} alt="people gazing at a wall of online lesson screens" className="relative m-auto h-full w-full object-cover"/>
        </div>
    </div>
  <div className="w-6/12 h-3/4 bg-white-space flex flex-col justify-center items-center rounded-r-md">
      <form onSubmit={onSignUp} className="w-6/12">
      <div className="relative w-full mt-10 space-y-8">
            <div className="relative">
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
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
            type="submit"
            className={whiteButtonStyle}
            onClick={demoLogin}
            >
            Demo User
          </button>
          <div className="flex">
            <Link path="/login">Already have an account?</Link>
          </div>
        </div>
        </div>
      </form>
    </div>
  </div>
  );
};

export default SignUpForm;
