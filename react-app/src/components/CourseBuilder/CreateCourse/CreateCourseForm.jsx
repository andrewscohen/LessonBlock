import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {createUserCourse} from "../../../store/course";

const whiteButtonStyle = "inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const formInputStyle = "block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"




const CreateCourseForm = ({setShowModal}) => {
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseCategory, setCourseCategory] = useState('');
    // const [courseImg, setCourseImg] = useState('');

    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCourseData = {
            name: courseName,
            description: courseDescription,
            category: courseCategory,
            userId: sessionUser.id,
        }
        dispatch(createUserCourse(newCourseData));
        setShowModal(false);
        history.push('/dashboard')
        return newCourseData;
    };

    const updateCourseName = (e) => {
        setCourseName(e.target.value);
      };

    const updateCourseDescription = (e) => {
        setCourseDescription(e.target.value);
      };

    const updateCourseCategory = (e) => {
        setCourseCategory(e.target.value);
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
            Create New Course
        </h1>
            <form onSubmit={handleSubmit} className="w-6/12">
                <div className="relative w-full mt-10 space-y-4">
                    <div className="relative">
                    <div>
                        <input
                            type='text'
                            placeholder='Name'
                            value={courseName}
                            className={formInputStyle}
                            onChange={updateCourseName}
                        >
                        </input>
                        <input
                            type='textarea'
                            placeholder='Description'
                            value={courseDescription}
                            className={formInputStyle}
                            onChange={updateCourseDescription}
                        >
                        </input>
                        <input
                            type='text'
                            placeholder='Category'
                            value={courseCategory}
                            className={formInputStyle}
                            onChange={updateCourseCategory}
                        >
                        </input>
                    </div>
                    <div>
                        <button type="submit" className={whiteButtonStyle}>Enter</button>
                    </div>
                </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default CreateCourseForm;
