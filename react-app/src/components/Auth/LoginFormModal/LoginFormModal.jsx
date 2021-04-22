// PACKAGE IMPORTS
import { useState } from "react";


// CONTEXT IMPORTS
import { Modal } from "../../../context/ModalContext";

// COMPONENT IMPORTS
import LoginForm from "./LoginForm";
import {SignUpForm} from "../SignUpFormModal";

function LoginFormModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const onClose = () => {
    if (showSignUpForm === true)
      setIsOpen(false)
      setShowSignUpForm(false)
      setShowLoginForm(true)
  }

  return (
    <>
      <button
        className="hidden text-lg font-bold text-gray-800 uppercase bg-white rounded-lg mobile:block laptop:px-3 laptop:py-2 desktop:px-4 desktop:py-3 laptop:text-sm desktop:text-lg mobile:text-sm mobile:py-2 mobile:px-3 hover:bg-gray-100"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setIsOpen(true)}>
          Log In
        </button>
      {modalIsOpen ? (
        <Modal onClose={onClose}>
          {showLoginForm ? (
          <LoginForm setShowLoginForm={setShowLoginForm} setShowSignUpForm={setShowSignUpForm} setIsOpen={setIsOpen}/>
          ) : <SignUpForm setShowLoginForm={setShowLoginForm} setShowSignUpForm={setShowSignUpForm} setIsOpen={setIsOpen}/>
          }
        </Modal>
      ) : null }
    </>
  );
}

export default LoginFormModal;
