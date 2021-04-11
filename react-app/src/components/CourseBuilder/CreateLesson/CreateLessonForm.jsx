import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {createCourseLesson} from "../../../store/lesson"

const whiteButtonStyle = "inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
const formInputStyle = "block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"


const CreateLessonForm = ({setShowLessonModal, course, sectionId}) => {
    const [lessonTitle, setLessonTitle] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const currentCourse = useSelector((state) => state.course.currentCourse)
    const sessionUser = useSelector((state) => state.session.user);
    const sectionNum = Number(sectionId)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (!isComplete) setIsComplete(false)
    }, [isComplete, setIsComplete])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FRONTEND SUBMIT FIRED!")
        const newLessonData = {
            lessonTitle: lessonTitle,
            contentMediaType: 'video',
            content: videoLink,
            is_complete: isComplete,
            sectionId: sectionNum,
            courseId: currentCourse.id,
        }
        console.log("FRONTEND LESSONS DATA:  ", newLessonData)
        dispatch(createCourseLesson(newLessonData));
        setShowLessonModal(false);
        console.log("FRONTEND IDK I THINK THIS WORKED AT THIS POINT?")
        history.push('/dashboard');
        return newLessonData;
    };

    const updateLessonTitle = (e) => {
        setLessonTitle(e.target.value);
      };

    const updateVideoLink = (e) => {
        setVideoLink(e.target.value)
    }


    return (
        <div className="container flex justify-end h-screen mt-96">
        <div className="absolute object-right-top pt-5 pr-8">
            {/* <button type="button" onClick={() => console.log()}> */}
            <button type="button" onClick={() => setShowLessonModal(false)}>
                <i className="fas fa-window-close"></i>
            </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full rounded-md h-2/4 bg-white-space">
        <h1 className="p-4 font-serif text-6xl font-bold text-black p">
            Create New Lesson
        </h1>
            <form onSubmit={handleSubmit} className="w-6/12">
                <div className="relative w-full mt-10 space-y-4">
                    <div>
                        <input
                            type='text'
                            placeholder='Section Title'
                            value={lessonTitle}
                            className={formInputStyle}
                            onChange={updateLessonTitle}
                        >
                        </input>
                        <input
                            type='text'
                            placeholder='Video Url'
                            value={videoLink}
                            className={formInputStyle}
                            onChange={updateVideoLink}
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

export default CreateLessonForm;
