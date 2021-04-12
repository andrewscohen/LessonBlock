// PACKAGE IMPORTS
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

// REDUX IMPORTS FROM STORE
import {getUserCourses} from "../../store/course";

// COMPONENT IMPORTS
import {SideNav} from "../CommonElements";
import CourseCard from "./CourseCard";

// CSS STYLES IMPORTS
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
          <SideNav
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
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
