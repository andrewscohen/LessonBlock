import React, {useState} from "react";
import { Modal } from '../../../context/ModalContext';
import CreateSectionForm from "./CreateSectionForm";

const CreateCourseModal = ({setAuthenticated, authenticated, currentCourse}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <button
        className="relative z-50 flex flex-row items-center pr-6 text-gray-600 border-l-4 border-transparent h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
        type="button"
        style={{transition: "all .15s ease"}}
        onClick={() => setShowModal(true)} >
        <span className="inline-flex items-center justify-center ml-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
        </span>
        <span className="ml-2 text-2xl tracking-wide truncate">Create a New Section</span>
      </button>
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
            <CreateSectionForm currentCourse={currentCourse} authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal} showModal={showModal}/>
        </Modal>
        ) : null}
    </>
  );
};

export default CreateCourseModal;
