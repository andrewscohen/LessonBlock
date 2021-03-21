import React, { useState } from 'react';
import { Modal } from '../../../context/ModalContext';
import LoginForm from './LoginForm';

function LoginFormModal({authenticated, setAuthenticated}) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <button
       className="px-4 py-3 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100"
       type="button"
       style={{ transition: "all .15s ease" }}
       onClick={() => setShowLoginModal(true)}>Log In</button>
      {showLoginModal ? (
        <Modal onClose={() => setShowLoginModal(false)}>
          {/* <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            > */}
          <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLoginModal={setShowLoginModal}/>
          {/* </div> */}
        </Modal>
      ) : null }
    </>
  );
}

export default LoginFormModal;
