import React from 'react';
import {NavLink} from 'react-router-dom'
import SplashHeader from '../../CreativeAssets/BackgroundImages/SplashHeader.svg'
import './LandingPage.css'


const LandingPage = () => {
    return (
        <>
        <div className="relative overflow-hidden h-screen">
        <img src={SplashHeader} className="absolute h-full w-full object-cover" alt="SplashHeader"/>
        <div className="inset-0 bg-black opacity-10 absolute">
        </div>
        <div className="container mx-auto relative z-10 flex items-center py-32 xl:py-72">
            <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
                <h1 className="font-bold text-6xl sm:text-7xl text-white leading-tight mt-12 font-serif">
                    Powerful lessons, made simply.
                </h1>
                <h2 className="font-bold text-3xl sm:text-3xl text-white leading-tight pt-5">
                    Empowering educators and students through easily scalable course building</h2>
                <button className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-8">
                    <NavLink to="/sign-up" exact={true} activeClassName="active">
                        Get Started
                    </NavLink>
                </button>
            </div>
        </div>
    </div>
    </>
    )
};

export default LandingPage;
