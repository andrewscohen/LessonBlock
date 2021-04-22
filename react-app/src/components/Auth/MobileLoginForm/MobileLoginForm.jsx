// PACKAGE IMPORTS
import { useState} from "react";
import { Redirect, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// REDUX IMPORTS FROM STORE
import {login} from "../../../store/session";

// TAILWIND STYLES
const whiteButtonStyle = "inline-block w-11/12 px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const blackButtonStyle = "inline-block w-11/12 px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-black border bg-black-600 rounded-lg hover:bg-gray-700 hover:text-white ease"
const formInputStyle = "shadow-inner block w-11/12 px-3 py-2 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 border-opacity-50 border-black border"


const MobileLoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      return <Redirect to='/dashboard' />
    } else {
      setErrors(user.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login('instructor@lessonblock.io', '8b4c7b0a-b365-4420-ae67-8f310c872054'));
    return <Redirect to='/dashboard' />
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to='/dashboard' />;
  }

    return (
      <>
        <section className="flex-col w-full h-screen pt-20 bg-white-space mobile:hidden">
          <h1 className="py-3 pl-16 font-semibold leading-tight text-black border-b-2 text-m ">
            Welcome Back! Let's Continue
          </h1>
          <form onSubmit={onLogin} className="flex-col mt-40">
                <div className="relative w-full mt-6 space-y-3 pl-7">
                <div className="relative">
                    <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                    className={formInputStyle}
                    autoComplete="username"
                />
                </div>
                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updatePassword}
                    className={formInputStyle}
                    autoComplete="current-password"
                  />
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className={blackButtonStyle}
                    >
                      Log In
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
                      Don't have an account?
                      <Link to="/" className="font-bold text-blue-800"> Sign Up</Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        </section>
      </>
    );
  };

export default MobileLoginForm;
