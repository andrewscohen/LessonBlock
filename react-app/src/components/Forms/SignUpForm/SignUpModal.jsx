import React, { useState } from "react";
import SignUpForm from "./SignUpForm";

const SignUpModal = ({authenticated, setAuthenticated}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-8"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Get Started
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal}/>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SignUpModal;
