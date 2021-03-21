import React, { useState } from "react";
import { Modal } from '../../../context/ModalContext';
import SignUpForm from "./SignUpForm";

const SignUpModal = ({authenticated, setAuthenticated}) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <>
      <button
        className="block px-4 py-3 mt-8 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowSignUpModal(true)}>Get Started</button>
      {showSignUpModal ? (
          <Modal onClose={() => setShowSignUpModal(false)}>
              <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowSignUpModal={setShowSignUpModal}/>
          </Modal>
      ) : null}
    </>
  );
};

export default SignUpModal;
