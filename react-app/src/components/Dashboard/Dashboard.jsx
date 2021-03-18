import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import {getUserCourses} from "../../store/course";
import BookCover from "./BookCover.jpg";



const Dashboard = ({setAuthenticated, authenticated}) => {
    const sessionUser = useSelector((state) => (state.session.user));
    const courses = useSelector((state) => Object.values(state.course.userCourses));
    console.log("COURSES: ",  courses)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserCourses());
      }, [dispatch]);


    return (
      <div className='grid grid-cols-12 w-full h-screen pt-20 bg-white-space overflow-hidden'>
      <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>
      <ul className="mt-28 pl-40 h-64 grid grid-span-3 grid-flow-col gap-4">
      {courses && courses.map(course => (
          <Link key={course.id} to={`/courses/${course.id}`}>
    <div className="w-96 h-auto rounded overflow-hidden shadow-lg my-2">
  <img className="w-full" src={BookCover} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-3xl  mb-2">{course.name}</div>
    <p className="text-grey-darker text-base">
      {course.description}
    </p>
  </div>
  </div>
  </Link>
  ))}
  </ul>
  </div>
    )
};

export default Dashboard;
