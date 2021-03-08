import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-modal";
import {SideNav} from "../CommonElements";
import {createCourses} from "../../store/course.js"

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: "1.5em",
      backgroundColor: "rgba(254, 58, 158, .7)",
      borderRadius: "2px",
      border: "none",
      width: "40%",
      boxSizing: "border-box",

    },
    overlay : {
        // backgroundColor: "transparent",
        backgroundColor: "rgba(0, 0, 0, .6)",
        zIndex: "100",
    }
  };

const Dashboard = () => {
    const sessionUser = useSelector((state) => state.session.user);

    const [newCourse, setNewCouse] = useState(false)
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseCategory, setCourseCategory] = useState('');
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const openModal = () => {
        setShowModal(true);
      }

    const closeModal = () => {
        setShowModal(false);
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await dispatch(createCourses({
              courseName,
              courseDescription,
              courseCategory,
              user_id: sessionUser.id,
            }))
            history.push(`/courses/{${res.id}`)
        }


    return (
    <>
    {/* <SideNav /> */}
    <div className="mx-auto pt-40">
     <button onClick={openModal}>Create a New Course</button>
     <Modal style={customStyles} isOpen={showModal} onRequestClose={closeModal}>
          <form onSubmit={closeModal}>
              <div>
                  <h2>Create a New Course</h2>
                  <input
                    type='text'
                    placeholder='Name'
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    required={true}
                  >
                  </input>
                  <input
                    type='textarea'
                    placeholder='Description'
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    required={true}
                  >
                  </input>
                  <input
                    type='text'
                    placeholder='Category'
                    value={courseCategory}
                    onChange={(e) => setCourseCategory(e.target.value)}
                    required={true}
                  >
                  </input>
              </div>
              <div>
                  <button onClick={handleSubmit} type="submit" disabled={courseName.length ? false : true}>Enter</button>
              </div>
          </form>
      </Modal>
      <div className="mx-auto pt-40"><h1>COURSE NAME: {courseName}</h1></div>
      </div>
    </>
    )
};

export default Dashboard;
