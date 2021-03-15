import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {createUserCourse} from "../../../store/course";
const whiteButtonStyle = "inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const formInputStyle = "block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"


const NewCourseForm = ({setShowModal}) => {
    const [errors, setErrors] = useState([]);
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
            user_id: sessionUser.id,
        }
        dispatch(createUserCourse(newCourseData));
        setShowModal(false);
        history.push('/dashboard')
        return newCourseData;
};

    return (
        <div className="container flex justify-end mt-96 pr-24 h-screen">
        <div className="absolute object-right-top pr-8 pt-5">
            <button type="button" onClick={() => setShowModal(false)}>
                <i className="fas fa-window-close"></i>
            </button>
        </div>
        <div className="w-6/12 h-3/4 bg-white-space flex flex-col justify-center items-center rounded-r-md">
        <h1 className="font-bold text-7xl sm:text-7xl text-black leading-tight font-serif">
            Create New Course
        </h1>
            <form onSubmit={handleSubmit} className="w-6/12">
                <div className="relative w-full mt-10 space-y-4">
                    <div className="relative">
                        <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    <div>
                        <h2>Create a New Course</h2>
                        <input
                            type='text'
                            placeholder='Name'
                            value={courseName}
                            className={formInputStyle}
                            onChange={(e) => setCourseName(e.target.value)}
                        >
                        </input>
                        <input
                            type='textarea'
                            placeholder='Description'
                            value={courseDescription}
                            className={formInputStyle}
                            onChange={(e) => setCourseDescription(e.target.value)}
                        >
                        </input>
                        <input
                            type='text'
                            placeholder='Category'
                            value={courseCategory}
                            className={formInputStyle}
                            onChange={(e) => setCourseCategory(e.target.value)}
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

export default NewCourseForm;
