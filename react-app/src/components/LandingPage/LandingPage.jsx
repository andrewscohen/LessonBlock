// PACKAGE IMPORTS
import {Redirect} from "react-router-dom";

// COMPONENT IMPORTS
import SignUpModal from "../Auth/SignUpFormModal/SignUpModal";

// ASSET IMPORTS
import SplashHeader from "../../assets/BackgroundImages/SplashHeader.svg";
import "./LandingPage.css"




const LandingPage = ({ authenticated, setAuthenticated }) => {

    return (
        <>
            {authenticated && <Redirect to="/dashboard" /> }
            <header className="relative h-screen overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover">
                <div className="container relative flex items-center py-32 pl-10 mx-auto align-center">
                    <div className="relative flex flex-col items-start laptop:w-3/5 desktop:w-2/5">
                        <h1 className="mt-12 font-serif text-6xl font-bold leading-tight text-white tablet:text-7xl">
                        Powerful lessons, made simply.
                        </h1>
                        <h2 className="pt-5 text-3xl font-bold leading-tight text-white tablet:text-3xl">
                            Empowering educators and students through easily scalable course building
                        </h2>
                        <SignUpModal
                            authenticated={authenticated}
                            setAuthenticated={setAuthenticated}
                        />
                    </div>
                </div>
            </header>
        </>
    )
};

export default LandingPage;
