import React, {useState} from "react";
// import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-modal";
import {createUserCourse} from "../../../store/course.js";

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: "1.5em",
      backgroundColor: "rgba(254, 58, 158, .7)",
      borderRadius: "2px",
      border: "none",
      width: "40%",
      boxSizing: "border-box",

    },
    overlay : {
        // backgroundColor: "transparent",
        backgroundColor: "rgba(0, 0, 0, .6)",
        zIndex: "100",
    }
  };


const CreateUserCourseButton = ({setAuthenticated, authenticated}) => {
    const sessionUser = useSelector((state) => state.session.user);

    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseCategory, setCourseCategory] = useState('');
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const openModal = () => {
    setShowModal(true);
    }

    const closeModal = () => {
    setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    const newCourseData = {
        name: courseName,
        description: courseDescription,
        category: courseCategory,
        user_id: sessionUser.id,
    }
    dispatch(createUserCourse(newCourseData));
    setShowModal(false);
    return newCourseData;
};

    return (
        <>
        <button onClick={openModal} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
        <span className="inline-flex justify-center items-center ml-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">Create a New Course</span>
      </button>
       <Modal style={customStyles} isOpen={showModal} onRequestClose={closeModal}>
       <form onSubmit={closeModal}>
           <div>
               <h2>Create a New Course</h2>
               <input
                 type='text'
                 placeholder='Name'
                 value={courseName}
                 onChange={(e) => setCourseName(e.target.value)}
                 required={true}
               >
               </input>
               <input
                 type='textarea'
                 placeholder='Description'
                 value={courseDescription}
                 onChange={(e) => setCourseDescription(e.target.value)}
                 required={true}
               >
               </input>
               <input
                 type='text'
                 placeholder='Category'
                 value={courseCategory}
                 onChange={(e) => setCourseCategory(e.target.value)}
                 required={true}
               >
               </input>
           </div>
           <div>
               <button onClick={handleSubmit} type="submit" disabled={courseName.length ? false : true}>Enter</button>
           </div>
       </form>
   </Modal>
   </>
    )
}

export default CreateUserCourseButton;
