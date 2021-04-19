import { useState, useEffect } from "react";
import { Redirect, Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signup, login} from "../../../store/session";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

const whiteButtonStyle = "inline-block w-11/12 px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const blackButtonStyle = "inline-block w-11/12 px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease"
const formInputStyle = "shadow-inner block w-11/12 px-3 py-2 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 border-opacity-50 border-black border"


const MobileSignUpForm = ({authenticated, setAuthenticated}) => {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [profileImage, setProfileImage] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
      if (!profileImage) {
          setProfileImage(`https://lessonblock.s3.amazonaws.com/Profile_Images/profile_pic.png`)
      }
    }, [profileImage, setProfileImage])

    const onSignUp = async (e) => {
      e.preventDefault();
      const isInstructor = (true) ? (userType === "Instructor") : false;
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

    const demoLogin = async (e) => {
      e.preventDefault();
      setTimeout(await dispatch(login("instructor@lessonblock.io", "8b4c7b0a-b365-4420-ae67-8f310c872054")), 1000);
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
      setUserType(e.target.value)
    }

    const userTypes = [
      "Instructor",
      "Student"
    ];

    if (authenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <>
        <section className="flex-col w-full h-full mx-auto bg-white-space mobile:hidden">
          <h1 className="py-3 font-semibold leading-tight text-black border-b-2 pl-7 text-m ">
            Sign Up and Start Learning!
          </h1>
          <form onSubmit={onSignUp} className="flex-col">
                <div className="relative w-full mt-10 space-y-3 pl-7">
                <div className="relative">
                    <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={updateUsername}
                  className={formInputStyle}
                  placeholder="Username"
                  required={true}
                  autoComplete="username"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={updateEmail}
                    className={formInputStyle}
                    placeholder="Email Address"
                    required={true}
                    autoComplete="email"
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={updatePassword}
                    className={formInputStyle}
                    placeholder="Password"
                    autoComplete="off"
                  />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      value={repeatPassword}
                      required={true}
                      onChange={updateRepeatPassword}
                      className={formInputStyle}
                      placeholder="Confirm Password"
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex mt-6 mb-6">
                    <select
                      type="text"
                      value={userType}
                      className={formInputStyle}
                      onChange={updateUserType}
                      required
                    >
                      <option value="" disabled hidden>Join Lessonblock as a...</option>
                      {userTypes.map((userType => (
                              <option key={userType}>{userType}</option>
                              ))
                          )}
                    </select>
                  </div>
                  <PasswordStrengthMeter password={password} />
                  <div className="relative">
                    <button
                      type="submit"
                      className={blackButtonStyle}
                    >
                      Create Account
                    </button>
                  <div className="relative">
                    <button
                      type="submit"
                      className={whiteButtonStyle}
                      onClick={demoLogin}
                    >
                      Start Demo
                    </button>
                    <div className="mt-4 ml-11">
                      Already have an account?
                      <Link to="/login" className="font-bold text-blue-800"> Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        </section>
      </>
    );
  };

export default MobileSignUpForm;
