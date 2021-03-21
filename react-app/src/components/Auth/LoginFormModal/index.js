import React, { useState } from 'react';
import { Modal } from '../../../context/ModalContext';
import LogForm from './LogForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
       className="bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase"
       type="button"
       style={{ transition: "all .15s ease" }}
       onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LogForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
