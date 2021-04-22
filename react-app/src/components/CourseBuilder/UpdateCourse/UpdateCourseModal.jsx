// PACKAGE IMPORTS
import { useState } from "react";

// CONTEXT IMPORTS
import { Modal } from "../../../context/ModalContext";

// COMPONENT IMPORTS
import UpdateCourseForm from "./UpdateCourseForm";

// TAILWIND STYLES
const listItemStyle = "block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 font-semibold w-full";

const UpdateCourseModal = ({currentCourse}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={listItemStyle}
          type="button"
          onClick={() => setShowModal(true)} >
        <span>Update This Course</span>
      </button>
        {showModal ? (
            <Modal onClose={() => setShowModal(false)}>
                <UpdateCourseForm
                  currentCourse={currentCourse}
                  setShowModal={setShowModal}
                />
            </Modal>
        ) : null}
    </>
  );
};

export default UpdateCourseModal;
