import React, {useState} from "react";
import { Modal } from '../../../context/ModalContext';
import CreateSectionForm from "./CreateSectionForm";

const CreateSectionModal = ({setAuthenticated, authenticated, course}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <button
       className="flex items-center justify-start px-3 py-4 mt-8 text-white bg-green-400 rounded-lg shadow mr-60 focus:outline-none"
        style={{transition: "all .15s ease"}}
        onClick={() => setShowModal(true)} >
        <svg className="w-5 h-5 ml-3 mr-2 fill-current" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
      <span>Create a New Section</span>
      </button>
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
            <CreateSectionForm course={course} authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal} showModal={showModal}/>
        </Modal>
        ) : null}
    </>
  );
};

export default CreateSectionModal;
