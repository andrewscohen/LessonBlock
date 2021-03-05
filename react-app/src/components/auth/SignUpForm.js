import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [is_instructor, setIsInstructor] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password, is_instructor);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
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
    <div className="container flex justify-center items-center h-screen mx-auto">
    <form onSubmit={onSignUp}>
      <div>
        <label className="font-medium text-gray-900">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={updateUsername}
          className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50" placeholder="Enter Your Username"
          required={true}></input>
      </div>
      <div className="relative">
        <label className="font-medium text-gray-900">Email</label>
        <input type="text"
              name="email"
            value={email}
            onChange={updateEmail}
            className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"
            placeholder="Enter Your Email Address"
            required={true} />
      </div>
      <div className="relative">
        <label className="font-medium text-gray-900">Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={updatePassword} className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50" placeholder="Password" />
      </div>
      <div className="relative">
        <label className="font-medium text-gray-900">Confirm Password</label>
        <input
            type="password"
            value={repeatPassword}
            required={true}
            onChange={updateRepeatPassword} className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50" placeholder="Password" />
      </div>
      <div>
        <label>
          <input
              type="radio"
              value={true}
              name="instructor"
              checked={is_instructor === true}
              onChange={updateUserType}
            />
            Instructor
        </label>
        <label>
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
        <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease">Create Account</button>
        <button
            className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease">Demo User</button>
      </div>
    </form>
    </div>
  );
};

export default SignUpForm;
