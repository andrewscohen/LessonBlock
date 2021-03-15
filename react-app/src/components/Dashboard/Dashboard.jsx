import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import {getUserCourses} from "../../store/course";


const Dashboard = ({setAuthenticated, authenticated}) => {
    const sessionUser = useSelector((state) => (state.session.user));
    const courses = useSelector((state) => (state.course.userCourses))

    console.log("COURSES: ",  courses)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserCourses());
      }, [dispatch]);


    return (
    <>
      <div className='grid grid-cols-12 w-full h-screen pt-20 bg-white-space overflow-hidden'>
    <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}>
    {courses && courses.map((course) => (
        <ul className="col-start-7 col-end-8 mt-28">
          <li key={course.id}>{course.name}</li>
        </ul>
      ))}
      </SideNav>
      </div>
    </>
    )
};

export default Dashboard;
