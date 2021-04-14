import { useState, useEffect } from "react";
import { Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signup, login} from "../../../store/session";
import sign_up_img from "./sign_up_img.jpg";

const whiteButtonStyle = "inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const blackButtonStyle = "inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease"
const formInputStyle = "block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"
const radioButtonStyle = "inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease"


const SignUpForm = ({authenticated, setAuthenticated, setShowSignUpForm, setShowLoginForm, setIsOpen }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isInstructor, setIsInstructor] = useState(false);
  const [profileImage, setProfileImage] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profileImage) {
        setProfileImage(`https://lessonblock.s3.amazonaws.com/Profile_Images/profile_pic.png`)
    }
  }, [profileImage, setProfileImage])

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(signup({username, email, password, isInstructor, profileImage}));
        if (!user.errors) {
          setAuthenticated(true);
          return <Redirect to="/dashboard" />
        } else {
          setErrors(user.errors);
        }
      };
  };

  const demoInstructorLogin = async (e) => {
    e.preventDefault();
    setTimeout(await dispatch(login("instructor@lessonblock.io", "8b4c7b0a-b365-4420-ae67-8f310c872054")), 1000);
    setAuthenticated(true)
    return <Redirect to="/dashboard" />
  };

  const demoStudentLogin = async (e) => {
    e.preventDefault();
    setTimeout(await dispatch(login("student@lessonblock.io", "719cfc7c-8a95-48ef-91ec-c6425790245f")), 1000);
    setAuthenticated(true)
    return <Redirect to="/dashboard" />
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
    <div className="container flex justify-end h-screen mt-96">
      <div className="absolute object-right-top pt-5 pr-8">
        <button type="button" onClick={() => setIsOpen(false)}>
          <i className="fas fa-window-close" />
        </button>
      </div>
    <div className="flex flex-col items-center justify-center w-6/12 overflow-hidden h-3/4 bg-brand-tan rounded-l-md">
      <div className="w-full h-full">
        <img src={sign_up_img} alt="people gazing at a wall of online lesson screens" className="relative object-cover w-full h-full m-auto"/>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center w-6/12 h-3/4 bg-white-space rounded-r-md">
      <h1 className="font-serif font-bold leading-tight text-black text-7xl sm:text-7xl">
        Join LessonBlock
      </h1>
        <form onSubmit={onSignUp} className="w-6/12">
          <div className="relative w-full mt-10 space-y-4">
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
              required={true} />
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
                  checked={isInstructor === true}
                  onChange={updateUserType}
                />
                Instructor
            </label>
            <label className={radioButtonStyle}>
              <input
                type="radio"
                value={false}
                name="instructor"
                checked={isInstructor === false}
                onChange={updateUserType}
              />
              Student
              </label>
          </div>
          <div className="relative">
          <button
            type="submit"
            className={blackButtonStyle}
            >
            Create Account
          </button>
          <button
                  type="submit"
                  className={whiteButtonStyle}
                  onClick={demoInstructorLogin}
                  >
                  Demo Instructor
                  </button>
                  <button
                  type="submit"
                  className={whiteButtonStyle}
                  onClick={demoStudentLogin}
                  >
                  Demo Student
                  </button>
          <div className="flex">
            <button
              type="button"
              onClick={() => setShowSignUpForm(false) || setShowLoginForm(true)}>
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  </div>
  );
};

export default SignUpForm;
