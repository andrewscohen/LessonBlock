import React, {useState} from "react";
import { Modal } from '../../../context/ModalContext';
import CreateLessonForm from "./CreateLessonForm";

const CreateLessonModal = ({setAuthenticated, authenticated, course, selectedSectionId}) => {
    const [showLessonModal, setShowLessonModal] = useState(false);

    return (
        <>
        <button
       className="px-4 py-3 m-5 font-bold bg-green-500 rounded-lg"
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
