import React, {useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import UpdateCourseModal from "./UpdateCourse/UpdateCourseModal";
import {getOneUserCourse, deleteOneUserCourse} from "../../store/course";
import {deleteOneUserCourseSection} from "../../store/section"
import CreateSectionModal from "./CreateSection/CreateSectionModal";


const CourseBuilder = ({authenticated, setAuthenticated}) => {
    const [course, setCourse] = useState({});
    const sessionUser = useSelector((state) => (state.session.user));
    const currentCourse = useSelector((state) => (state.course.currentCourse))
    const dispatch = useDispatch();
    const history = useHistory();
    const { courseId }  = useParams();

    useEffect(() => {
      if (courseId) {
        dispatch(getOneUserCourse(courseId))
    }}, [courseId, dispatch]);

    useEffect(() => {
      if (currentCourse) {
        setCourse(currentCourse)
      }}, [currentCourse])

    function deleteThisCourse() {
      dispatch(deleteOneUserCourse(course.id))
      history.push('/dashboard')
    }

    function deleteThisSection() {
      console.log("DELETE FIRED")
      dispatch(deleteOneUserCourseSection({courseId: 135, sectionId: 27}))
    }

    return (
      <div className='grid w-full h-screen grid-cols-12 pt-20 overflow-hidden bg-white-space'>
        <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>
            {course && (
              <>
                <h1 className="col-span-6 mx-auto text-6xl font-bold">Welcome To {course.name}</h1>
              </>
            )}
        <div className="flex flex-col">
          <UpdateCourseModal currentCourse={course}/>
          <button type='button'
            className="px-4 py-3 m-5 font-bold bg-green-500 rounded-lg"
            onClick={deleteThisCourse}>
            DELETE THIS COURSE
          </button>
          <CreateSectionModal course={course}/>
          <button type='button'
            className="px-4 py-3 m-5 font-bold bg-green-500 rounded-lg"
            onClick={deleteThisSection}>
            DELETE THIS SECTION
          </button>
            <h1 className="text-xl font-bold uppercase">SECTIONS</h1>
              {course.sections && course.sections.map(section => (
                <ul>
                  <li key={section.id}>SECTION: {section.order_num} {section.title}</li>
                </ul>
              ))}
      </div>
    </div>
    )
}

export default CourseBuilder;
