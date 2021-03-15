import React, {useState} from "react";
import NewCourseForm from "../../Forms/NewCourseForm";

const CreateUserCourseButton = ({setAuthenticated, authenticated}) => {

    const [showNewCourseModal, setShowNewCourseModal] = useState(false);

    return (
        <>
        <button
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
        type="button"
        style={{transition: "all .15s ease"}}
        onClick={() => setShowNewCourseModal(true)} >
        <span className="inline-flex justify-center items-center ml-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
        </span>
        <span className="ml-2 text-2xl tracking-wide truncate">Create a New Course</span>
      </button>
      {showNewCourseModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <NewCourseForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowNewCourseModal={setShowNewCourseModal}/>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CreateUserCourseButton;
