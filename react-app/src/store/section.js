const LOAD_ALL_COURSE_SECTIONS = "section/loadCourseSections";
const LOAD_ONE_COURSE_SECTION = "section/loadOneCourseSection";
const CREATE_SECTION = "sections/createSection";
const UPDATE_SECTION = "sections/updateSection";


// ACTION CREATORS START
export const loadAllCourseSections = (sections) => {
    return { type: LOAD_ALL_COURSE_SECTIONS, payload: sections };
  };

  export const loadOneCourseSection = (section) => {
    return { type: LOAD_ONE_COURSE_SECTION, payload: section };
  };

 export const createSection = (section) => ({
    type: CREATE_SECTION,
    payload: section,
  });

 export const updateSection = (section) => ({
    type: UPDATE_SECTION,
    payload: section,
  });
// ACTION CREATORS END


// GET THUNKS START
  export const getUserCourseSections = ({courseId}) => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${courseId}`);
    const data = await res.json();
    res.data = data;
    dispatch(loadAllCourseSections(res.data));
  };


  export const getOneUserCourse = ({courseId, id}) => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${courseId}/${id}`);
    const data = await res.json();
    dispatch(loadOneCourseSection(data));
    return data;
  };
// GET THUNKS END

// CREATE THUNKS START
export const createCourseSection = ({ courseId, sectionTitle, orderNum, userId }) => async (dispatch) => {
  console.log("3: CREATE SECTION THUNK HIT!!!!!!")
  const res = await fetch(`/api/sections`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: userId,
                           course_id: courseId,
                           title: sectionTitle,
                           order_num: orderNum,
                          }),
  });
  const parsedResponse = await res.json();
  console.log("4: BEFORE DISPATCH!!!!", parsedResponse)
  dispatch(createCourseSection(parsedResponse));
  dispatch(getUserCourseSections())
  console.log("5: AFTER DISPATCH!!!!", parsedResponse)
  return parsedResponse;
}
// CREATE THUNKS END


// UPDATE THUNKS START
  export const updateCourseSection = ({ courseId, sectionTitle, orderNum, userId, sectionId}) => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${courseId}/${sectionId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId,
                             course_id: courseId,
                             section_id: sectionId,
                             title: sectionTitle,
                             order_num: orderNum,

       }),
    });
    const parsedResponse = await res.json();
    dispatch(updateCourseSection(parsedResponse))
    dispatch(getUserCourseSections());
    return parsedResponse;
  }
// UPDATE THUNKS END


// DELETE THUNKS START
  export const deleteOneCourseSection = ({courseId, sectionId}) => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${courseId}/${sectionId}`, {
      method: "DELETE"
    });
    const parsedResponse = await res.json();
    dispatch(loadAllCourseSections(parsedResponse));
    return parsedResponse;
  }
// DELETE THUNKS END


// END THUNKS

  const initialState = { currentSection: null, userCourseSections: [] };

export default function sectionReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_ALL_COURSE_SECTIONS:
      newState = {...state, userCoursesSections: [...action.payload.sections]}
      return newState;
    case LOAD_ONE_COURSE_SECTION:
      newState = {...state, currentSection: {...action.payload}}
      return newState;
    case UPDATE_SECTION:
      newState = {...state, currentSection: {...action.payload}}
      return newState;
      default:
        return state;
      }
    }
