// PACKAGE IMPORTS
import {useState} from "react";

// CONTEXT IMPORTS
import { Modal } from "../../../context/ModalContext";

// COMPONENT IMPORTS
import UpdateSectionForm from "./UpdateSectionForm";

const UpdateSectionModal = ({setAuthenticated, authenticated, course}) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button
          className="px-4 py-3 m-5 font-bold bg-green-500 rounded-lg"
          type="button"
          style={{transition: "all .15s ease"}}
          onClick={() => setShowModal(true)}
        >
          Create a New Section
        </button>
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
            <UpdateSectionForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              showModal={showModal}
              setShowModal={setShowModal}
              course={course}
            />
        </Modal>
        ) : null}
    </>
  );
};

export default UpdateSectionModal;
