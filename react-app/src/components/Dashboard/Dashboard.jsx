// PACKAGE IMPORTS
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

// REDUX IMPORTS FROM STORE
import {getUserCourses} from "../../store/course";

// COMPONENT IMPORTS
import {SideNav} from "../CommonElements";
import CourseCard from "./CourseCard";

// CSS STYLES IMPORTS
import "./Dashboard.css";


const Dashboard = ({setAuthenticated, authenticated}) => {
    const [isInstructor, setIsInstructor] = useState(false);
    const courses = useSelector((state) => Object.values(state.course.userCourses));
    const sessionUser = useSelector((state) => (state.session.user));

    const dispatch = useDispatch();

    useEffect(() => {
        sessionUser.is_instructor === true ? setIsInstructor(true) : setIsInstructor(false);
      }, [sessionUser, isInstructor, setIsInstructor])

    useEffect(() => {
        dispatch(getUserCourses());
      }, [dispatch]);


    return (
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <SideNav
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            isInstructor={isInstructor}
          />
        </div>
        <div className="card-wrapper">
          {courses && courses.map(course => (
            <div key={course.id}>
              <CourseCard
                course={course}
                isInstructor={isInstructor}
                />
            </div>
          ))}
        </div>
      </div>
    )
};

export default Dashboard;
