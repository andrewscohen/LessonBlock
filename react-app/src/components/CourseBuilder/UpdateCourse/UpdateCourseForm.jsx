// PACKAGE IMPORTS
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

// REDUX IMPORTS FROM STORE
import {updateOneUserCourse} from "../../../store/course"

// TAILWIND STYLES
const whiteButtonStyle = "inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const formInputStyle = "block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"


const UpdateCourseForm = ({setShowModal, currentCourse}) => {
    const [courseName, setCourseName] = useState(currentCourse.name);
    const [courseDescription, setCourseDescription] = useState(currentCourse.description);
    const [courseCategory, setCourseCategory] = useState(currentCourse.category);
    const [courseImg, setCourseImg] = useState('hello!');

    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedCourseData = {
            name: courseName,
            description: courseDescription,
            category: courseCategory,
            courseId: currentCourse.id,
            userId: sessionUser.id,
            courseImg: courseImg,
        }
        console.log("1 handleSubmit fired")
        dispatch(updateOneUserCourse(updatedCourseData));
        console.log("dispatch fired")
        setShowModal(false);
        history.push('/dashboard');
        return updatedCourseData;
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
                <button
                    type="button"
                    onClick={() => setShowModal(false)}>
                    <i className="fas fa-window-close" />
                </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full rounded-md h-2/4 bg-white-space">
                <h1 className="p-4 font-serif text-6xl font-bold text-black p">
                    EDIT THIS COURSE
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
                                <input
                                    type='file'
                                    // value={courseImg}
                                    className={formInputStyle}
                                    onChange={(e) => setCourseImg(e.target.files[0])}
                                >
                                </input>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className={whiteButtonStyle}
                                >
                                    Enter
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateCourseForm;
