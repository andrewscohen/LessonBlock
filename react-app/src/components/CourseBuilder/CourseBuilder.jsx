import React, {useEffect, useState} from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import UpdateCourseModal from "./UpdateCourse/UpdateCourseModal";
import CreateSectionModal from "./CreateSection/CreateSectionModal";
import CreateLessonModal from "./CreateLesson/CreateLessonModal";
import {getOneUserCourse, deleteOneUserCourse} from "../../store/course";
import {deleteOneUserCourseSection} from "../../store/section"
import {deleteOneUserCourseLesson} from "../../store/lesson"


const CourseBuilder = ({authenticated, setAuthenticated}) => {
    const [course, setCourse] = useState({});
    const [selectedSection, setSelectedSection] = useState({})
    const [selectedLesson, setSelectedLesson] = useState({})
    const dispatch = useDispatch();
    const history = useHistory();
    const { courseId }  = useParams();

    const sessionUser = useSelector((state) => (state.session.user));
    const currentCourse = useSelector((state) => (state.course.currentCourse))

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

    const deleteThisSection = async (e) => {
      await dispatch(deleteOneUserCourseSection({courseId: course.id, sectionId: selectedSection.id}))
      history.push(`/users/me/courses/${course.id}`)
      setSelectedSection('')
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
          <CreateLessonModal course={course} section={selectedSection}/>
            <h1 className="text-xl font-bold uppercase">SECTIONS</h1>
              {course.sections && course.sections.map(section => (
                <ul>
                  {/* <Link to={`/users/me/courses/${course.id}/sections/${section.id}`} key={section.id}>
                    SECTION: {section.order_num} {section.title}
                  </Link> */}
                  <li key={section.order_num}>
                  <button key={section.id}value={section.id} onClick={() => setSelectedSection(section)}>
                    SECTION: {section.order_num} {section.title}
                  </button>
                  </li>
                </ul>
              ))}
          <h1 className="text-xl font-bold uppercase">LESSONS</h1>
              {/* {course.sections.lessons && course.sections.lessons.map(lesson => (
                <ul>
                  <li key={lesson.id}>
                  <button value={lesson.id} onClick={() => setSelectedLesson(lesson)}>
                    Lesson: {lesson.title}
                  </button>
                  </li>
                </ul>
              ))} */}
      </div>
    </div>
    )
}

export default CourseBuilder;
