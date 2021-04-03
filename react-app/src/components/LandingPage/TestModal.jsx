import React, { useState, useEffect } from "react";
import { Modal } from '../../context/ModalContext';
// import SignUpForm from "./SignUpForm";
import TestFormA from "./TestFormA";
import TestFormB from "./TestFormB";

const TestModal = ({authenticated, setAuthenticated}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [showFormA, setShowFormA] = useState(true);

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
          <Modal onClose={() => setIsOpen(false)}>
            {showFormA ? (
                <TestFormA setShowFormA={setShowFormA}/>
            ) : <TestFormB setShowFormA={setShowFormA}/>
            }

          </Modal>
        ) : null}
    </>
  );
};

export default TestModal;
