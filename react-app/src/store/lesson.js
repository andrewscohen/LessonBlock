const LOAD_ALL_COURSE_LESSONS = "lesson/loadCourseLessons";
const LOAD_ONE_COURSE_LESSON = "lesson/loadOneCourseLesson";
const CREATE_LESSON = "lessons/createLesson";
const UPDATE_LESSON = "lessons/updateLesson";



// ACTION CREATORS START
export const loadAllCourseLessons = (lessons) => {
    return { type: LOAD_ALL_COURSE_LESSONS, payload: lessons };
  };

  export const loadOneCourseLesson = (lesson) => {
    return { type: LOAD_ONE_COURSE_LESSON, payload: lesson };
  };

 export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    payload: lesson,
  });

 export const updateLesson = (lesson) => ({
    type: UPDATE_LESSON,
    payload: lesson,
  });
// ACTION CREATORS END


// GET THUNKS START
  export const getUserCourseLesson = ({courseId, sectionId}) => async (dispatch) => {
   console.log("THUNK FIRED!!!")
    const res = await fetch(`/api/users/me/courses/${courseId}/sections/${sectionId}/lessons`);
    const data = await res.json();
    console.log("THUNK data: ", data)
    res.data = data;
    console.log("REDUX getUserCourseLesson: ", data)
    dispatch(loadAllCourseLessons(res.data));
  };


  export const getOneUserCourseLesson = ({courseId, sectionId, id}) => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${courseId}/sections/${sectionId}/lessons/${id}`);
    const data = await res.json();
    console.log("REDUX getOneUserCourseLesson: ", data)
    dispatch(loadOneCourseLesson(data));
    return data;
  };
// GET THUNKS END

// CREATE THUNKS START
export const createCourseLesson = ({lessonTitle, contentMediaType, content, is_complete, sectionId, courseId }) => async (dispatch) => {
  console.log("REDUX: WE HAVE HIT THE THUNK!    ", "title: ", lessonTitle, "sectionId: ", sectionId )
  const res = await fetch(`/api/users/me/courses/${courseId}/sections/${sectionId}/lessons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: lessonTitle,
      content_media_type: contentMediaType,
      content: content,
      is_complete: is_complete,
      section_id: sectionId,
      course_id: courseId
                          }),
  });
  const parsedResponse = await res.json();
  console.log("REDUX PARSED RESPONSE:  ", parsedResponse)
  dispatch(loadOneCourseLesson())
  console.log("ACTION HAS BEEN DISPATCHED")
  return parsedResponse;
}
// CREATE THUNKS END


// UPDATE THUNKS START
  export const updateCourseLesson = ({ courseId, lessonTitle, orderNum, userId, lessonId, sectionId}) => async (dispatch) => {
    const res = await fetch(`/api/users/me/courses/${courseId}/sections/${sectionId}/lessons/${lessonId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId,
                             lesson_id: lessonId,
                             title: lessonTitle,
                             order_num: orderNum,

       }),
    });
    const parsedResponse = await res.json();
    dispatch(updateCourseLesson(parsedResponse))
    dispatch(getUserCourseLesson());
    return parsedResponse;
  }
// UPDATE THUNKS END


// DELETE THUNKS START
  export const deleteOneUserCourseLesson = ({courseId, sectionId, lessonId}) => async (dispatch) => {
    console.log("THUNK HIT: ", courseId )
    const res = await fetch(`/api/users/me/courses/${courseId}/sections/${sectionId}/lessons/${lessonId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
                            course_id: courseId,
                            section_id: sectionId,
                            lesson_id: lessonId
                          }),
      });
      const parsedResponse = await res.json();
      console.log("PARSED RESPONSE: ", parsedResponse)
      dispatch(loadAllCourseLessons(parsedResponse.lessons));
      return parsedResponse;
  }
// DELETE THUNKS END


// END THUNKS
  const initialState = { currentLesson: null, userCourseLessons: [] };

export default function lessonReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_ALL_COURSE_LESSONS:
      newState = {...state, userCourseLessons: [...action.payload]}
      return newState;
    case LOAD_ONE_COURSE_LESSON:
      newState = {...state, currentLesson: {...action.payload}}
      return newState;
    case UPDATE_LESSON:
      newState = {...state, currentLesson: {...action.payload}}
      return newState;
      default:
        return state;
      }
    }
