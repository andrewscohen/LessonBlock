import React, {useState} from "react";
import { Modal } from '../../../context/ModalContext';
import CreateSectionForm from "./CreateSectionForm";

const CreateSectionModal = ({setAuthenticated, authenticated, course}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <button
       className="px-4 py-3 m-5 font-bold bg-green-500 rounded-lg"
        type="button"
        style={{transition: "all .15s ease"}}
        onClick={() => setShowModal(true)} >Create a New Section</button>
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
            <CreateSectionForm course={course} authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal} showModal={showModal}/>
        </Modal>
        ) : null}
    </>
  );
};

export default CreateSectionModal;
