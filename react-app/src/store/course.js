const LOAD_ALL_COURSES = "courses/loadCourses";
const LOAD_ONE_COURSE = "courses/loadOneCourse";
const CREATE_COURSE = "courses/createCourse";
const USER_LOGOUT = "USER_LOGOUT";


export const loadCourses = (courses) => {
    return { type: LOAD_ALL_COURSES, payload: courses };
  };

  export const loadOneCourse = (course) => {
    return { type: LOAD_ONE_COURSE, payload: course };
  };

 export const createCourse = (course) => ({
    type: CREATE_COURSE,
    payload: course,
  });


  export const getUserCourses = () => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses`);
    const data = await res.json();
    res.data = data;
    dispatch(loadCourses(res.data));
  };


  export const getOneUserCourse = courseId => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${courseId}`);
    const data = await res.json();
    dispatch(loadOneCourse(data));
    return data;
  };


  export const updateOneUserCourse = ({courseId, name, description, category, courseImg, userId}) => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${courseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course_id: courseId,
                             name: name,
                             description: description,
                             category: category,
                             course_img: courseImg,
                             user_id: userId
                            }),
    });
    const parsedResponse = await res.json();
    console.log("PARSED BEFORE: ", parsedResponse)
    dispatch(loadCourses(parsedResponse));
    console.log("PARSED AFTER: ", parsedResponse)
    return parsedResponse;
  }

  // export const getOneCourse = courseId => async (dispatch) => {
  //   const res = await fetch(`/api/courses/${courseId}`);
  //   const data = await res.json();

  //   dispatch(loadOneCourse(data));
  //   return data;
  // };



  export const deleteOneUserCourse = id => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${id}`, {
      method: "DELETE"
    });
    const parsedResponse = await res.json();
    dispatch(loadCourses(parsedResponse));
    return parsedResponse;
  }


  export const createUserCourse = ({ name, description, category, user_id }) => async (dispatch) => {
    const res = await fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user_id,
                             name: name,
                             description: description,
                             category: category
                            }),
    });
    const parsedResponse = await res.json();
    dispatch(createCourse(parsedResponse));
    dispatch(getUserCourses())
    return parsedResponse;
  }

  const initialState = { currentCourse: null, userCourses: [] };

export default function courseReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_ALL_COURSES:
      newState = {...state, userCourses: [...action.payload.courses]}
      return newState;
    case LOAD_ONE_COURSE:
      newState = {...state, currentCourse: {...action.payload}}
      return newState;
  //  case LOAD_SELECTION_SECTION:
  //     const selectedSection = { ...state, selectedSection: action.payload };
  //      return selectedSection;
  //  case REMOVE_SELECTED_SECTION:
  //     const removeSelectedSection = { ...state, selectedSection: null };
  //      return removeSelectedSection;

    default:
      return state;
  }
}
