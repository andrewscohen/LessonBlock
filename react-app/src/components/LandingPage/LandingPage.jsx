import React from "react";
import {useHistory} from "react-router-dom";
import SplashHeader from "../../assets/BackgroundImages/SplashHeader.svg";
import SignUpModal from "../Auth/SignUpFormModal/SignUpModal";
// import TestModal from "./TestModal";




const LandingPage = ({ authenticated, setAuthenticated }) => {
    const history = useHistory();

    return (
        <>
        {authenticated && history.push("/dashboard")}
        <div className="relative h-screen overflow-hidden">
        <img src={SplashHeader} className="fixed object-cover w-full h-full overflow-auto" alt="SplashHeader"/>
        <div className="absolute inset-0 bg-black opacity-10">
        </div>
        <div className="container relative flex items-center py-32 pl-10 mx-auto xl:py-72">
            <div className="relative flex flex-col items-start lg:w-3/5 xl:w-2/5">
                <h1 className="mt-12 font-serif text-6xl font-bold leading-tight text-white sm:text-7xl">
                    Powerful lessons, made simply.
                </h1>
                <h2 className="pt-5 text-3xl font-bold leading-tight text-white sm:text-3xl">
                    Empowering educators and students through easily scalable course building</h2>
                <SignUpModal authenticated={authenticated} setAuthenticated={setAuthenticated}/>
                {/* <TestModal /> */}

            </div>
        </div>
    </div>
    </>
    )
};

export default LandingPage;
