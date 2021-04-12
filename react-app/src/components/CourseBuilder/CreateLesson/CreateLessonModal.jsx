// PACKAGE IMPORTS
import {useState} from "react";

// CONTEXT IMPORTS
import { Modal } from "../../../context/ModalContext";

// COMPONENT IMPORTS
import CreateLessonForm from "./CreateLessonForm";

// TAILWIND STYLES
const listItemStyle = "block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 font-semibold w-full";

const CreateLessonModal = ({sectionId}) => {
    const [showLessonModal, setShowLessonModal] = useState(false);


    return (
        <>
        <button
       className={listItemStyle}
        onClick={() => setShowLessonModal(true)} >Create a New Lesson</button>
      {showLessonModal ? (
        <Modal onClose={() => setShowLessonModal(false)}>
            <CreateLessonForm
                setShowLessonModal={setShowLessonModal}
                showModal={showLessonModal}
                sectionId={sectionId}
            />
        </Modal>
        ) : null}
    </>
  );
};

export default CreateLessonModal;
