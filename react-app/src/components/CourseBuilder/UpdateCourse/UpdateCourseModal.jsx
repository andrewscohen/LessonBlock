import React, { useState } from "react";
import { Modal } from '../../../context/ModalContext';
import UpdateCourseForm from "./UpdateCourseForm";

const UpdateCourseModal = ({authenticated, setAuthenticated, currentCourse}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="block px-4 py-3 mt-8 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100"
        type="button"
        style={{ transition: "all .15s ease" }}
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
