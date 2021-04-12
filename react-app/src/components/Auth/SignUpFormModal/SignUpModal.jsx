import React, { useState} from "react";
import { Modal } from "../../../context/ModalContext";
import SignUpForm from "./SignUpForm";
import LoginForm from "../LoginFormModal/LoginForm"

const SignUpModal = ({authenticated, setAuthenticated}) => {
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
        className="block px-4 py-3 mt-8 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100"
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

export default SignUpModal;
