import React, {useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import UpdateCourseModal from "./UpdateCourse/UpdateCourseModal";
import {getOneUserCourse, deleteOneUserCourse, updateOneUserCourse} from "../../store/course";


const CourseBuilder = ({authenticated, setAuthenticated}) => {
    const [course, setCourse] = useState({});
    const sessionUser = useSelector((state) => (state.session.user));
    const currentCourse = useSelector((state) => (state.course.currentCourse))
    const dispatch = useDispatch();
    const history = useHistory();
    const { courseId }  = useParams();

    useEffect(() => {
      if (!courseId) {
        return
      }
      (async () => {
        const response = await fetch(`/api/users/me/courses/${courseId}`);
        const course = await response.json();
        setCourse(course);
        dispatch(getOneUserCourse(courseId));
      })();
    }, [courseId, dispatch]);

    function deleteThisCourse() {
      dispatch(deleteOneUserCourse(courseId))
      history.push('/dashboard')
    }

    function updateThisCourse() {
      dispatch(updateOneUserCourse(courseId))
      return
    }

    return (
        <div className='grid w-full h-screen grid-cols-12 pt-20 overflow-hidden bg-white-space'>
      <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>
      <UpdateCourseModal currentCourse={currentCourse}/>
      {currentCourse && (
        <>
        <h1>{currentCourse.name}</h1>
        <h1>{currentCourse.description}</h1>
        <h1>{currentCourse.category}</h1>
        <h1>{currentCourse.course_img}</h1>
        </>
      )}
      <button type='button' onClick={deleteThisCourse}>DELETE THIS COURSE</button>
      </div>
    )
}

export default CourseBuilder;
