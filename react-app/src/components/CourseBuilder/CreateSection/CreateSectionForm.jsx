// PACKAGE IMPORTS
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";

// REDUX IMPORTS FROM STORE
import {createCourseSection} from "../../../store/section"
import {getOneUserCourse} from "../../../store/course"

// TAILWIND STYLES
const whiteButtonStyle = "inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const formInputStyle = "block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"


const CreateSectionForm = ({setShowModal, course}) => {
    const [sectionTitle, setSectionTitle] = useState('');
    const [orderNum, setOrderNum] = useState('');
    const [eventTrigger, setEventTrigger] = useState(false);

    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const courseId = course.id;

    useEffect(() => {
        if (eventTrigger) {
          dispatch(getOneUserCourse(courseId))
          setShowModal(false);
          setEventTrigger(false)
      }}, [eventTrigger, dispatch, courseId, setShowModal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSectionData = {
            sectionTitle: sectionTitle,
            orderNum: orderNum,
            userId: sessionUser.id,
            courseId: courseId,
        }
        dispatch(createCourseSection(newSectionData));
        setEventTrigger(true);
        return newSectionData;
    };

    const updateSectionTitle = (e) => {
        setSectionTitle(e.target.value);
      };

      const updateOrderNum = (e) => {
        setOrderNum(e.target.value);
      };


    return (
        <div className="container flex justify-end h-screen mt-96">
        <div className="absolute object-right-top pt-5 pr-8">
            <button type="button" onClick={() => setShowModal(false)}>
                <i className="fas fa-window-close"></i>
            </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full rounded-md h-2/4 bg-white-space">
        <h1 className="p-4 font-serif text-6xl font-bold text-black p">
            Create New Section
        </h1>
            <form onSubmit={handleSubmit} className="w-6/12">
                <div className="relative w-full mt-10 space-y-4">
                    <div>
                        <input
                            type='text'
                            placeholder='Section Title'
                            value={sectionTitle}
                            className={formInputStyle}
                            onChange={updateSectionTitle}
                        >
                        </input>
                        <input
                            type='text'
                            placeholder='Section Number'
                            value={orderNum}
                            className={formInputStyle}
                            onChange={updateOrderNum}
                        >
                        </input>
                    </div>
                    <div>
                        <button type="submit" className={whiteButtonStyle}>Enter</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default CreateSectionForm;
