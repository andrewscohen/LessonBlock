const LOAD_ALL_COURSES = "courses/LOAD_ALL_COURSES";
const LOAD_ONE_COURSE = "courses/LOAD_ONE_COURSE";
const CREATE_COURSE = "courses/createCourse";
const DELETE_COURSE = "courses/DELETE_COURSE";
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

  export const deleteCourse = (id) => {
    return { type: DELETE_COURSE, payload: id };
  };

  export const getUserCourses = userId => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/courses`);
    const data = await res.json();
    res.data = data;
    dispatch(loadCourses(res.data));
  };

  export const getOneCourse = courseId => async (dispatch) => {
    const res = await fetch(`/api/courses/${courseId}`);
    const data = await res.json();

    dispatch(loadOneCourse(data));
    return data;
  };

  export const deleteOneCourse = id => async (dispatch) => {
    const res = await fetch(`/api/courses/delete/${id}`, {
      method: "DELETE"
    });
    if (res.ok) {
      dispatch(deleteCourse(id));
      return res;
    }
  };

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
    dispatch(createCourse(parsedResponse))
    return parsedResponse;
  }

  const initialState = { currentCourse: {}, userCourses: {} };

export default function courseReducer(state = initialState, action) {
  const updateState = { ...state };
  switch (action.type) {
    case LOAD_ALL_COURSES:
      action.payload.forEach(course => {
        updateState.userCourses[course.id] = course;
      });
      return updateState;
    case LOAD_ONE_COURSE:
      updateState.currentCourse = action.payload;
      return updateState;
    case DELETE_COURSE:
      delete updateState.userCourses[action.id];
      return updateState;
    case USER_LOGOUT:
      updateState.userCourses = {};
      return updateState;
    default:
      return state;
  }
}
