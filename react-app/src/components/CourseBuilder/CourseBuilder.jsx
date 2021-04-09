import React, {useEffect, useState} from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import {getOneUserCourse, deleteOneUserCourse} from "../../store/course";
import {deleteOneUserCourseSection} from "../../store/section";
import MenuDropDown from "./MenuDropDown";
import BookCover from "../Dashboard/Assets/BookCover.jpg"


const CourseBuilder = ({authenticated, setAuthenticated}) => {
    const [course, setCourse] = useState({});
    const [isInstructor, setIsInstructor] = useState(false);
    const [selectedSectionId, setSelectedSectionId] = useState(0);
    const [eventTrigger, setEventTrigger] = useState(false)
    const [displayControls, setDisplayControls] = useState(false);

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

    // useEffect(() => {
    //   sessionUser.is_instructor === true ? setIsInstructor(true) : setIsInstructor(false);
    //   console.log("isINSTRUCTOR!: ", isInstructor)
    // }, [sessionUser, isInstructor])

    const deleteThisCourse = () => {
      dispatch(deleteOneUserCourse(course.id))
      history.push('/')
      setEventTrigger(true)
    }

    const deleteThisSection = async (e) => {
      await dispatch(deleteOneUserCourseSection({courseId: course.id, sectionId: selectedSectionId}))
      setEventTrigger(true)
    }

    return (
      <div className="flex w-full h-screen pt-20 overflow-hidden select-none">
        <SideNav
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
        />
        <main className="flex-1 px-10 pt-2 pb-2 my-1 overflow-y-auto transition duration-500 ease-in-out bg-white-space dark:bg-black">
          <div className="flex flex-col text-3xl capitalize">
            <span className="font-semibold">{course.name}</span>
          </div>
          <div className="flex">
            <div className="flex flex-col flex-shrink-0 w-1/2 py-2 mt-8 mr-6 bg-white rounded-lg dark:bg-gray-600">
        {/* Card list container */}
              <h3 className="flex items-center justify-between px-8 pt-1 pb-1 text-lg font-semibold capitalize dark:text-gray-300">
          {/* Header */}
              <span>Curriculum</span>
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
                <Link
                  to={`/users/me/courses/${course.id}/sections/${section.id}`}
                  key={section.order_num}
                  className="mt-2"
                >
                <a className="flex flex-col justify-between p-5 bg-gray-100 rounded-lg dark:bg-gray-200" href="/">
                <div className="flex items-center justify-between font-semibold capitalize dark:text-gray-700">
                <span onClick={() => setSelectedSectionId(section.id)}>
                  {section.title}</span>
                  <div className="flex items-center">
                  <span>"Section No. "{section.order_num}</span>
                  </div>
                  </div>
                  </a>
                </Link>
              ))}
              </ul>
            </div>
        </div>
        <div className="flex flex-col flex-shrink-0 w-1/2 py-2 mt-8 mr-6 overflow-y-hidden text-white bg-scroll bg-purple-300 rounded-lg ">
        <h3 className="flex items-center px-8 pt-1 pb-1 text-lg font-bold capitalize">
          {/* Header */}
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
