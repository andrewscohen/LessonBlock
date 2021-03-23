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
          <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLoginModal={setShowLoginModal}/>
        </Modal>
      ) : null }
    </>
  );
}

export default LoginFormModal;
