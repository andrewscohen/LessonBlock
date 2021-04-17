// PACKAGE IMPORTS
import {Redirect} from "react-router-dom";

// COMPONENT IMPORTS
import SignUpModal from "../Auth/SignUpFormModal/SignUpModal";

// ASSET IMPORTS
import "./LandingPage.css"




const LandingPage = ({ authenticated, setAuthenticated }) => {

    return (
        <>
            {authenticated && <Redirect to="/dashboard" /> }

            <header className="relative h-screen overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover">
                <section className="container relative flex items-center h-full align-center">
                    <article className="relative flex flex-col items-start laptop:ml-20 desktop:ml-28 widescreen:ml-40">
                        <h1 className="font-serif font-bold leading-tight laptop:text-4xl laptop:w-7/12 desktop:text-5xl widescreen:w-7/12 widescreen:text-6xl desktop:text-blue-200 laptop:text-alt-purple mobile:text-red-800 ">
                        Powerful lessons made simply.
                        </h1>
                        <h2 className="font-bold leading-tight text-white laptop:text-l widescreen:pt-4 widescreen:text-3xl desktop:text-2xl desktop:w-5/12 laptop:w-5/12 laptop:pt-2">
                            strengthening communities through accessible education
                        </h2>
                        <SignUpModal
                            authenticated={authenticated}
                            setAuthenticated={setAuthenticated}
                        />
                    </article>
                </section>
            </header>
        </>
    )
};

export default LandingPage;
