import React from "react";
// import {useHistory} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import Modal from "react-modal";
import {SideNav} from "../CommonElements";
// import {createUserCourse} from "../../store/course.js";

const Dashboard = ({setAuthenticated, authenticated}) => {
    // const sessionUser = useSelector((state) => state.session.user);

    // // const [newCourse, setNewCourse] = useState(false)
    // const [courseName, setCourseName] = useState('');
    // const [courseDescription, setCourseDescription] = useState('');
    // const [courseCategory, setCourseCategory] = useState('');
    // const [showModal, setShowModal] = useState(false);
    // // const history = useHistory();
    // const dispatch = useDispatch();

    // const openModal = () => {
    //     setShowModal(true);
    //   }

    // const closeModal = () => {
    //     setShowModal(false);
    //   }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const newCourseData = {
    //         name: courseName,
    //         description: courseDescription,
    //         category: courseCategory,
    //         user_id: sessionUser.id,
    //     }
    //     dispatch(createUserCourse(newCourseData));
    //     setShowModal(false);
    //     return newCourseData;
    // };

    return (
    <>
    <h1>Howdy</h1>
    <SideNav setAuthenticated={setAuthenticated} authenticated={authenticated}/>

    </>
    )
};

export default Dashboard;
