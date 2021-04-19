import { useState} from "react";
import { Modal } from "../../../context/ModalContext";
import SignUpForm from "./SignUpForm";
import {LoginForm} from "../LoginFormModal";

const SignUpFormModal = ({authenticated, setAuthenticated}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const onClose = () => {
    if (showLoginForm === true) {
    setIsOpen(false);
    setShowSignUpForm(true);
    setShowLoginForm(false);
    }
  }

  return (
    <>
      <button
        className="block font-bold text-gray-800 uppercase bg-white rounded-lg laptop:px-3 laptop:py-2 desktop:px-4 desktop:py-3 desktop:mt-4 laptop:mt-4 widescreen:mt-6 laptop:text-sm desktop:text-lg hover:bg-gray-100 mobile:text-sm mobile:py-2 mobile:px-3"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setIsOpen(true)}>
          Get Started
      </button>
        {modalIsOpen ? (
          <Modal onClose={onClose}>
            {showSignUpForm ? (
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setIsOpen={setIsOpen} setShowLoginForm={setShowLoginForm} setShowSignUpForm={setShowSignUpForm}/>
            ) : <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLoginForm={setShowLoginForm} setShowSignUpForm={setShowSignUpForm} setIsOpen={setIsOpen}/>
            }
          </Modal>
        ) : null}
    </>
  );
};

export default SignUpFormModal;
