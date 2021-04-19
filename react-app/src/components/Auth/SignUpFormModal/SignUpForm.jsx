import { useState, useEffect } from "react";
import { Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signup, login} from "../../../store/session";
import sign_up_img from "./sign_up_img.jpg";
import * as formStyle from "./FormStyle.js";
import PasswordStrengthMeter from "../PasswordStrengthMeter";


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
    console.log("isInstructor: ", isInstructor)
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <article className="container flex items-center justify-center h-screen">

      <section className="flex flex-col justify-center overflow-hidden mobile:w-5/12 mobile:h-3/5 h-3/4 rounded-l-md">
        <div className="w-full h-full">
          <img src={sign_up_img} alt="people gazing at a wall of online lesson screens" className="relative object-cover w-full h-full m-auto"/>
        </div>
      </section>
      <section className="flex flex-col items-center mobile:bg-yellow-700 mobile:p-3 mobile:w-5/12 mobile:h-3/5 h-3/4 bg-white-space rounded-r-md">
        <div className="flex justify-between w-full">
            <h1 className="font-serif font-bold leading-tight text-black mobile:text-lg">
            Sign Up and Start Learning!
            </h1>
            <button type="button" className="mobile:self-start" onClick={() => setIsOpen(false)}>
            <i className="text-sm fas fa-window-close" />
            </button>
          </div>
          <form onSubmit={onSignUp} className="w-full">
            <div className="relative w-full">
              <div className="relative">
                <ul>
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
              <label className={formStyle.label}>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={updateUsername}
                className={formStyle.formInputStyle}
                placeholder="Username"
                required={true} />
            </div>
            <div className="relative">
              <label className={formStyle.label}>Email</label>
              <input type="text"
                    name="email"
                  value={email}
                  onChange={updateEmail}
                  className={formStyle.formInputStyle}
                  placeholder="Email Address"
                  required={true} />
            </div>
            <div className="relative">
              <label className={formStyle.label}>Password</label>
              <input
                type="password"
                value={password}
                name="password"
                onChange={updatePassword}
                className={formStyle.formInputStyle}
                placeholder="Password" />
            </div>
            <div className="relative">
              <label className={formStyle.label}>Confirm Password</label>
              <input
                  type="password"
                  value={repeatPassword}
                  required={true}
                  onChange={updateRepeatPassword}
                  className={formStyle.formInputStyle}
                  placeholder="Password" />
            </div>
            {password && (
            <PasswordStrengthMeter password={password} />
            )}
            <div className="flex">
              <label className={formStyle.radioButtonStyle}>
                <input
                    type="radio"
                    value={true}
                    name="instructor"
                    onChange={updateUserType}
                  />
                  Instructor
              </label>
              <label className={formStyle.radioButtonStyle}>
                <input
                  type="radio"
                  value={false}
                  name="instructor"
                  onChange={updateUserType}
                />
                Student
                </label>
            </div>
            <div className="relative">
            <button
              type="submit"
              className={formStyle.blackButtonStyle}
              >
              Create Account
            </button>
            <div className="flex">
              <button
                type="submit"
                className={formStyle.whiteButtonStyle}
                onClick={demoInstructorLogin}
                >
                Start Demo
                </button>
                <button
                  type="button"
                  onClick={() => setShowSignUpForm(false) || setShowLoginForm(true)}>
                  Already have an account?
                </button>
              </div>
            </div>
          </div>
      </form>
    </section>
  </article>
  );
};

export default SignUpForm;
