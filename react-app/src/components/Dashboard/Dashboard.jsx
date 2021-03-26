import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SideNav} from "../CommonElements";
import {getUserCourses} from "../../store/course";
import CourseCard from "./CourseCard";
import "./Dashboard.css";



const Dashboard = ({setAuthenticated, authenticated}) => {
    const courses = useSelector((state) => Object.values(state.course.userCourses));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserCourses());
      }, [dispatch]);


    return (
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>
        </div>
        <div className="card-wrapper">
          {courses && courses.map(course => (
            <div key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    )
};

export default Dashboard;
