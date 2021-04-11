import React, {useState} from "react";
import { Modal } from '../../../context/ModalContext';
import CreateSectionForm from "./CreateSectionForm";

const CreateSectionModal = ({setAuthenticated, authenticated, course}) => {
    const [showModal, setShowModal] = useState(false);

    const listItemStyle = "block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 font-semibold w-full";

    return (
        <>
        <button
        className={listItemStyle}
        onClick={() => setShowModal(true)} >
      <span>Create a New Section</span>
      </button>
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
            <CreateSectionForm course={course} authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal} showModal={showModal} />
        </Modal>
        ) : null}
    </>
  );
};

export default CreateSectionModal;
