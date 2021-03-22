const LOAD_ALL_COURSES = "courses/loadCourses";
const LOAD_ONE_COURSE = "courses/loadOneCourse";
const CREATE_COURSE = "courses/createCourse";
const UPDATE_COURSE = "courses/updateCourse";


// ACTION CREATORS START
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

 export const updateCourse = (course) => ({
    type: UPDATE_COURSE,
    payload: course,
  });
// ACTION CREATORS END


// GET THUNKS START
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
// GET THUNKS END

// CREATE THUNKS START
export const createUserCourse = ({ name, description, category, userId }) => async (dispatch) => {
  const res = await fetch("/api/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: userId,
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
// CREATE THUNKS END


// UPDATE THUNKS START
  export const updateOneUserCourse = ({courseId, name, description, category, courseImg, userId}) => async (dispatch) => {
    console.log("3 REDUX: HIT updateOneUserCourse")
    // const res = await fetch(`/api/users/me/courses/${courseId}`, {
    const res = await fetch(`/api/courses`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course_id: courseId,
                             user_id: userId,
                             name: name,
                             description: description,
                             category: category,
                             course_img: courseImg,
                            }),
    });
    const parsedResponse = await res.json();
    console.log("4 REDUX PARSED BEFORE DISPATCH: ", parsedResponse)
    dispatch(updateCourse(parsedResponse))
    dispatch(getUserCourses());
    console.log("5 REDUX PARSED AFTER DISPACTCH: ", parsedResponse)
    return parsedResponse;
  }
// UPDATE THUNKS END


// DELETE THUNKS START
  export const deleteOneUserCourse = id => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${id}`, {
      method: "DELETE"
    });
    const parsedResponse = await res.json();
    dispatch(loadCourses(parsedResponse));
    return parsedResponse;
  }
// DELETE THUNKS END


// END THUNKS

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
    case UPDATE_COURSE:
      newState = {...state, currentCourse: {...action.payload}}
      return newState;
      default:
        return state;
      }
    }
