import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SideNav, ContentWindow} from "../CommonElements";
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
    {/* <h1>Howdy</h1> */}
    <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>
    {/* <ContentWindow ></ContentWindow> */}
    </>
    )
};

export default Dashboard;
