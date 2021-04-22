// PACKAGE IMPORTS
import {useState, useEffect} from "react";

// COMPONENT IMPORTS
import {SideNav} from "../Navigation";
import CourseCard from "../Dashboard/CourseCard";

const CourseMarket = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
          const response = await fetch("/api/courses/");
          const responseData = await response.json();
          setCourses(responseData);
        }
        fetchCourses();
      }, []);

    return (
        <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <SideNav />
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
}

export default CourseMarket;
