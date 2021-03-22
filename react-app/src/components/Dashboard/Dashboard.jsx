import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import {getUserCourses} from "../../store/course";
import {getUserCourseSections} from "../../store/section"
import CourseCard from "./CourseCard";



const Dashboard = ({setAuthenticated, authenticated}) => {
    const courses = useSelector((state) => Object.values(state.course.userCourses));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserCourses());
      }, [dispatch]);

      // useEffect(() => {
      //   dispatch(getUserCourseSections());
      // }, [dispatch]);


    return (
      <div className='grid w-full h-screen grid-cols-12 pt-20 overflow-hidden bg-white-space'>
        <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>
          <ul className="grid h-64 grid-flow-col col-start-4 col-end-11 mt-28">
            {courses && courses.map(course => (
                <CourseCard course={course} />
            ))}
          </ul>
      </div>
    )
};

export default Dashboard;
