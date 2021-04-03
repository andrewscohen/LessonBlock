import React from "react";
import {Link} from "react-router-dom";
import BookCover from "./Assets/BookCover.jpg";

const CourseCard = ({course}) => {
    return (
        <Link key={course.id} to={`/users/me/courses/${course.id}`}>
            <div className="my-8 overflow-hidden rounded shadow-lg h-96 w-96">
                <img className="w-full h-60" src={course.course_img ? course.course_img : BookCover} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="mb-2 text-3xl font-bold">{course.name}</div>
                    <p className="text-base text-grey-darker">
                    {course.description}
                    </p>
                </div>
            </div>
        </Link>
        )}

export default CourseCard;
