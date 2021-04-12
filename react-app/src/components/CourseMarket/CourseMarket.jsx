import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAllCourses} from "../../store/course";

const CourseMarket = ({authenticated, setAuthenticated}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCourses());
      }, [dispatch]);

    return (
        <h1>Hello from Course Market</h1>
    )
}

export default CourseMarket;
