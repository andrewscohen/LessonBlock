import React, {useEffect, useState} from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import {getOneUserCourse, deleteOneUserCourse} from "../../store/course";
import {deleteOneUserCourseSection} from "../../store/section";
import MenuDropDown from "./MenuDropDown";
import BookCover from "../Dashboard/Assets/BookCover.jpg"

const pageLayout = "flex-1 px-10 pt-2 pb-2 my-1 overflow-y-auto transition duration-500 ease-in-out bg-white-space dark:bg-black";

const sectionListStyle = "flex items-center justify-between p-5 font-semibold capitalize bg-gray-100 rounded-lg dark:text-gray-700 dark:bg-gray-200 w-9/12";

const deleteButtonStyle = "flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500";


const CourseBuilder = ({authenticated, setAuthenticated}) => {
    const [course, setCourse] = useState({});
    const [isInstructor, setIsInstructor] = useState(false);
    const [selectedSectionId, setSelectedSectionId] = useState(0);
    const [eventTrigger, setEventTrigger] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();
    const { courseId }  = useParams();

    const sessionUser = useSelector((state) => (state.session.user));
    const currentCourse = useSelector((state) => state.course.currentCourse ? state.course.currentCourse : null)

    useEffect(() => {
      if (courseId) {
        dispatch(getOneUserCourse(courseId))
    }}, [courseId, dispatch]);

    useEffect(() => {
      if (eventTrigger) {
        dispatch(getOneUserCourse(courseId))
        setEventTrigger(false)
    }}, [eventTrigger, dispatch, courseId]);

    useEffect(() => {
      if (currentCourse) {
        setCourse(currentCourse)
      }}, [currentCourse, course])

    useEffect(() => {
      if (selectedSectionId !== 0) {
        dispatch(deleteOneUserCourseSection({courseId: course.id, sectionId: selectedSectionId})).then(
        dispatch(getOneUserCourse({courseId: course.id})))
        // setEventTrigger(true)
      }
    }, [selectedSectionId, course.id, dispatch, eventTrigger])
    // useEffect(() => {
    //   sessionUser.is_instructor === true ? setIsInstructor(true) : setIsInstructor(false);
    //   console.log("isINSTRUCTOR!: ", isInstructor)
    // }, [sessionUser, isInstructor])

    const deleteThisCourse = () => {
      dispatch(deleteOneUserCourse(course.id))
      history.push('/')
      setEventTrigger(true)
    }

    // const deleteThisSection = async (e) => {
    //   await dispatch(deleteOneUserCourseSection({courseId: course.id, sectionId: selectedSectionId}))
    //   setEventTrigger(true)
    // }

    return (
      <div className="flex w-full h-screen pt-20 overflow-hidden select-none">
        <SideNav
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
        />
        <main className={pageLayout}>
          <div className="flex flex-col text-3xl capitalize">
            <span className="font-semibold">{course.name}</span>
          </div>
          <div className="flex">
            <div className="flex flex-col flex-shrink-0 w-1/2 py-2 mt-8 mr-6 bg-white rounded-lg dark:bg-gray-600">
        {/* Left Card */}
              <h3 className="flex items-center justify-between px-8 pt-1 pb-1 text-lg font-semibold capitalize dark:text-gray-300">
          {/* Header */}
              <span>YOUR SECTIONS</span>
                <MenuDropDown
                  deleteThisCourse={deleteThisCourse}
                  currentCourse={currentCourse}
                  course={course}
                />
              </h3>
        <div className="mb-10">
          {/* List */}
              <ul className="px-3 pt-1 pb-2 mb-8">
                {course.sections !== undefined && course.sections.map(section => (
                <li key={section.id}>
                <div className="flex justify-between">
                <Link
                  to={`/users/me/courses/${course.id}/sections/${section.id}`}
                  className={sectionListStyle}
                  onClick={() => setSelectedSectionId(section.id)}
                >
                    <p>Section No. {section.order_num}</p>
                    <p>{section.title}</p>
                    <p>{typeof section.id}</p>
                    <p>{typeof course.id}</p>
                </Link>
                <button
                  // className={deleteButtonStyle}
                  onClick={() => setSelectedSectionId(section.id)}
                ><svg width="40" height="40" className="w-12 h-12 m-auto mt-4 text-indigo-500" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z">
                </path>
            </svg></button>
                </div>
                </li>
              ))}
              </ul>
            </div>
        </div>
        <div className="flex flex-col flex-shrink-0 w-1/2 py-2 mt-8 mr-6 overflow-y-hidden text-white bg-scroll bg-purple-300 rounded-lg ">
        <h3 className="flex items-center px-8 pt-1 pb-1 text-lg font-bold capitalize">
          {/* Right Card*/}
          <span>You're Doing Great!</span>
          <button className="ml-2">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 256 512">
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z" />
            </svg>
          </button>
        </h3>
        <div className="flex flex-col items-center mt-12">
          <div className="w-full h-full"></div>
            <img
              src={BookCover}
              className="relative object-cover w-full h-full"
              alt=" empty schedule"
            />
            <span className="text-purple-500">

            </span>
            <button className="px-4 py-2 my-4 bg-purple-800 rounded-lg">
              Update This Course
            </button>
        </div>
      </div>
        </div>
      </main>
    </div>
  )
}

export default CourseBuilder;
