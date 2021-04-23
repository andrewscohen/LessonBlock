// PACKAGE IMPORTS
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

// COMPONENT IMPORTS
import {SignUpFormModal, MobileSignUpForm} from "../Auth";

// ASSET IMPORTS
import "./LandingPage.css"


const LandingPage = () => {
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <>
            {sessionUser && <Redirect to="/dashboard" /> }

            <header className="relative h-screen overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover">
                <article className="container relative flex items-center h-full align-center">
                    <section className="relative flex-col items-start hidden w-1/2 mobile:flex laptop:ml-12 desktop:ml-28 widescreen:ml-40 mobile:ml-10 widescreen:w-5/12">
                        <h1>
                        <span className="font-serif font-bold leading-tight text-white laptop:text-5xl laptop:w-7/12 widescreen:w-7/12 widescreen:text-6xl mobile:text-4xl mobile:w-7/12">
                        Powerful lessons made simply.</span>
                        </h1>
                        <h2>
                            <span className="font-bold leading-tight text-white laptop:text-l widescreen:pt-4 widescreen:text-3xl desktop:text-2xl desktop:w-5/12 laptop:w-5/12 mobile:text-lg mobile:w-6/12 laptop:pt-2 mobile:pb-2">
                            strengthening communities through accessible education</span>
                        </h2>
                        <SignUpFormModal />
                    </section>
                    <MobileSignUpForm />
                </article>
            </header>
        </>
    )
};

export default LandingPage;
