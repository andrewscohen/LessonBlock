// PACKAGE IMPORTS
import {useState} from "react";

// CONTEXT IMPORTS
import { Modal } from "../../../context/ModalContext";

// COMPONENT IMPORTS
import DeleteCourseForm from "./DeleteCourseForm";

// TAILWIND STYLES
const listItemStyle = "block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 font-semibold w-full";

const DeleteCourseModal = ({courseId, sectionId}) => {
    const [showModal, setShowModal] = useState(false);

    return(
    <>
        <button
            className={listItemStyle}
            type="button"
            onClick={() => setShowModal(true)}
        >
            Delete This Course
        </button>
        {showModal ? (
            <Modal onClose={() => setShowModal(false)}>
                <DeleteCourseForm sectionId={sectionId} courseId={courseId} setShowModal={setShowModal} showModal={showModal}/>
            </Modal>
            ) : null}
    </>
  );
};

export default DeleteCourseModal;
