import React from "react";
import SplashHeader from "../../assets/BackgroundImages/SplashHeader.svg";
import "./LandingPage.css";
import SignUpModal from "../Forms/SignUpForm/SignUpModal"



const LandingPage = ({ authenticated, setAuthenticated }) => {
    return (
        <>
        <div className="relative overflow-hidden h-screen">
        <img src={SplashHeader} className="fixed h-full w-full object-cover overflow-auto" alt="SplashHeader"/>
        <div className="inset-0 bg-black opacity-10 absolute">
        </div>
        <div className="container mx-auto relative flex items-center py-32 xl:py-72">
            <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative">
                <h1 className="font-bold text-6xl sm:text-7xl text-white leading-tight mt-12 font-serif">
                    Powerful lessons, made simply.
                </h1>
                <h2 className="font-bold text-3xl sm:text-3xl text-white leading-tight pt-5">
                    Empowering educators and students through easily scalable course building</h2>
                <SignUpModal authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </div>
        </div>
    </div>
    </>
    )
};

export default LandingPage;
