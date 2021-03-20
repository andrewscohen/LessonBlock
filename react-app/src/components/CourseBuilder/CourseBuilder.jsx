import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import {getOneUserCourse} from "../../store/course";


  // Notice we use useParams here instead of getting the params
  // From props.


//   if (!course) {
//     return null;
//   }

//   return (
//     <ul>
//       <li>
//         <strong>Course Id</strong> {courseId}
//       </li>
//       <li>
//         <strong>Course Description</strong> {user.username}
//       </li>
//       <li>
//         <strong>Category</strong> {course.email}
//       </li>
//     </ul>
//   );
// }
// export default User;


const CourseBuilder = ({authenticated, setAuthenticated}) => {
    const [course, setCourse] = useState({});
    const sessionUser = useSelector((state) => (state.session.user));
    const currentCourse = useSelector((state) => (state.course.currentCourse))
    const dispatch = useDispatch();


    const { courseId }  = useParams();
    useEffect(() => {
      if (!courseId) {
        return
      }
      (async () => {
        const response = await fetch(`/api/users/me/courses/${courseId}/current`);
        const course = await response.json();
        setCourse(course);
        dispatch(getOneUserCourse(course));
      })();
    }, [courseId, dispatch]);

    return (
        <div className='grid grid-cols-12 w-full h-screen pt-20 bg-white-space overflow-hidden'>
      <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>
      {currentCourse && (
        <h1>{currentCourse.name}</h1>
      )}

      </div>
    )
}

export default CourseBuilder;
