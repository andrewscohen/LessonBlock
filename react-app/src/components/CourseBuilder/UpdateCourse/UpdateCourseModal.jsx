import React, { useState } from "react";
import { Modal } from '../../../context/ModalContext';
import UpdateCourseForm from "./UpdateCourseForm";

const UpdateCourseModal = ({authenticated, setAuthenticated, currentCourse}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button
       className="flex items-center justify-center px-3 py-4 mt-8 ml-20 mr-20 text-white bg-green-400 rounded-lg shadow focus:outline-none"
        type="button"
        style={{transition: "all .15s ease"}}
        onClick={() => setShowModal(true)} >
        <svg className="w-5 h-5 ml-3 mr-2 fill-current" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
      <span>Update This Course</span>
      </button>
      {showModal ? (
          <Modal onClose={() => setShowModal(false)}>
              <UpdateCourseForm currentCourse={currentCourse} authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal}/>
          </Modal>
      ) : null}
    </>
  );
};

export default UpdateCourseModal;
