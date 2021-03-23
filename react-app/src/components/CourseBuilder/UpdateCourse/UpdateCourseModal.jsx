import React, { useState } from "react";
import { Modal } from '../../../context/ModalContext';
import UpdateCourseForm from "./UpdateCourseForm";

const UpdateCourseModal = ({authenticated, setAuthenticated, currentCourse}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="px-4 py-3 m-5 font-bold bg-green-500 rounded-lg"
        type="button"
        onClick={() => setShowModal(true)}>Update Course</button>
      {showModal ? (
          <Modal onClose={() => setShowModal(false)}>
              <UpdateCourseForm currentCourse={currentCourse} authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal}/>
          </Modal>
      ) : null}
    </>
  );
};

export default UpdateCourseModal;
