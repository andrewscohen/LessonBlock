import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import {getUserCourses} from "../../store/course";
import CourseCard from "./CourseCard";



const Dashboard = ({setAuthenticated, authenticated}) => {
    const courses = useSelector((state) => Object.values(state.course.userCourses));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserCourses());
      }, [dispatch]);


    return (
      <div className='grid w-full h-screen grid-cols-12 pt-20 overflow-hidden bg-white-space'>
        <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>
            {courses && courses.map(course => (
              <ul>
                <CourseCard course={course} />
              </ul>
            ))}
      </div>
    )
};

export default Dashboard;
