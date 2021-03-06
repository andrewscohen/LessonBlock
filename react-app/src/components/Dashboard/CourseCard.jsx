// PACKAGE IMPORTS
import {Link, useLocation} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";

// REDUX IMPORTS FROM STORE
import {enrollInOneCourse} from "../../store/course";

// ASSET IMPORTS
import BookCover from "./Assets/BookCover.jpg";

const CourseCard = ({course}) => {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const pathName = location.pathname.slice(1);

    const enrollStudent = () => {
        dispatch(enrollInOneCourse({courseId: course.id}));
    };

    return (
        <>
            {pathName === "dashboard" ? (
            <Link key={course.id} to={`/users/me/courses/${course.id}`}>
                <div className="my-8 overflow-hidden rounded shadow-lg h-96 w-96">
                    <img
                        className="w-full h-60"
                        src={course.course_img ? course.course_img : BookCover}
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="mb-2 text-3xl font-bold">{course.name}</div>
                        <p className="text-base text-grey-darker">
                            {course.description}
                        </p>
                    </div>
                </div>
            </Link>
            ) : (
                <div key={course.id} className="my-8 rounded shadow-lg h-96 w-96">
                    <img
                        className="w-full h-60"
                        src={course.course_img ? course.course_img : BookCover}
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                    <div className="mb-2 text-3xl font-bold">{course.name}</div>
                    <p className="text-base text-grey-darker">{course.description}</p>
                </div>
                <div>
                    <button
                    className="px-4 py-3 text-lg font-bold text-gray-800 uppercase bg-blue-500 rounded-lg hover:bg-gray-100"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={enrollStudent}
                    >
                        Enroll Today
                    </button>
                </div>
            </div>
            )}
        </>
    )}

export default CourseCard;
