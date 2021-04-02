import React, {useState} from "react";
import { Modal } from '../../../context/ModalContext';
import CreateLessonForm from "./CreateLessonForm";

const CreateLessonModal = ({setAuthenticated, authenticated, course, selectedSectionId}) => {
    const [showLessonModal, setShowLessonModal] = useState(false);

    return (
        <>
        <button
       className="flex items-center justify-center px-3 py-4 mt-8 ml-20 mr-20 text-white bg-green-400 rounded-lg shadow focus:outline-none"
        type="button"
        style={{transition: "all .15s ease"}}
        onClick={() => setShowLessonModal(true)} >Create a New Lesson</button>
      {showLessonModal ? (
        <Modal onClose={() => setShowLessonModal(false)}>
            <CreateLessonForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                setShowLessonModal={setShowLessonModal}
                showModal={showLessonModal}
                selectedSectionId={selectedSectionId}
                course={course}
            />
        </Modal>
        ) : null}
    </>
  );
};

export default CreateLessonModal;
