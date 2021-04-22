// PACKAGE IMPORTS
import { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Redirect, Link} from 'react-router-dom';

// REDUX IMPORTS FROM STORE
import {login} from '../../../store/session';
import login_img from './login_img.jpg';
import * as formStyle from "./LoginFormStyle.js";


const LoginForm = ({ setShowLoginForm, setShowSignUpForm, setIsOpen }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setEmail('')
      setPassword('')
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
    <article className='container hidden h-screen mobile:items-center mobile:flex mobile:m-auto mobile:w-11/12 laptop:w-9/12 widescreen:w-10/12'>
      <section className='flex flex-col items-center justify-center overflow-hidden widescreen:w-3/6 widescreen:h-2/3 mobile:h-2/5 laptop:h-4/6 rounded-l-md desktop:h-3/6'>
          <img src={login_img} alt='people gazing at a wall of online lesson screens'className='h-screen'/>
      </section>
      <section className='flex flex-col justify-center widescreen:items-center laptop:justify-start mobile:w-full mobile:h-2/5 widescreen:w-6/12 widescreen:h-2/3 laptop:pl-3 bg-white-space rounded-r-md laptop:h-4/6 desktop:w-full desktop:h-3/6'>
        <div className="flex justify-between desktop:w-full mobile:w-11/12 mobile:pb-6 laptop:py-6 desktop:px-2 widescreen:px-4">
          <h1 className='font-serif font-bold leading-tight text-black widescreen:text-6xl widescreen:pb-12 widescreen:mt-12 mobile:text-2xl laptop:text-5xl '>
            Welcome Back!
          </h1>
          <button type='button' onClick={() => setIsOpen(false)}>
            <i className='self-start fas fa-window-close' />
          </button>
        </div>
        <form onSubmit={onLogin} className='pr-4 widescreen:pb-10 widescreen:w-6/12'>
          <div className='relative w-full widescreen:space-y-4'>
            <div className='relative'>
              <label htmlFor='email' className='font-medium text-gray-900'>Email</label>
              <input
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
                className={formStyle.formInputStyle}
              />
            </div>
            <div className='relative'>
              <label htmlFor='password' className='font-medium text-gray-900'>Password</label>
              <input
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
                className={formStyle.formInputStyle}
              />
            </div>
            <div className='relative'>
              <button
                type='submit'
                className={formStyle.blackButtonStyle}
              >
                Log In
              </button>
                <button
                type='submit'
                className={formStyle.whiteButtonStyle}
                onClick={demoLogin}
                >
                Start Demo
                </button>
            </div>
            <div className='flex items-center justify-center mobile:flex-col laptop:mt-2'>
              <div className="flex">
                <p className="font-semibold">Don't have an account?</p>
              <button
                  type='button'
                  onClick={() => setShowSignUpForm(true) || setShowLoginForm(false)}
                  className="font-bold text-blue-700 mobile:pl-2"
                >Sign Up
              </button>
              </div>
              {/* <Link to='/sign-up' className="font-semibold">Forgot Password?</Link> */}
            </div>
          </div>
        </form>
      </section>
    </article>
  );
};


export default LoginForm;
