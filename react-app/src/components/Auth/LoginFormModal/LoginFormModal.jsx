import { useState } from "react";
import { Modal } from "../../../context/ModalContext";
import LoginForm from "./LoginForm";
import SignUpForm from "../SignUpFormModal/SignUpForm";

function LoginFormModal({authenticated, setAuthenticated}) {
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
        className="block font-bold text-gray-800 uppercase bg-white rounded-lg laptop:px-3 laptop:py-2 desktop:px-4 desktop:py-3 laptop:text-sm desktop:text-lg hover:bg-gray-100"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setIsOpen(true)}>
          Log In
        </button>
      {modalIsOpen ? (
        <Modal onClose={onClose}>
          {showLoginForm ? (
          <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLoginForm={setShowLoginForm} setShowSignUpForm={setShowSignUpForm} setIsOpen={setIsOpen}/>
          ) : <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLoginForm={setShowLoginForm} setShowSignUpForm={setShowSignUpForm} setIsOpen={setIsOpen}/>
          }
        </Modal>
      ) : null }
    </>
  );
}

export default LoginFormModal;
