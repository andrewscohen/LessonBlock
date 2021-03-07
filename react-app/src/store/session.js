  const SET_USER = "user/setUser";
  const REMOVE_USER = "user/removeUser";

  export const setUser = (user) => {
    return {
    type: SET_USER,
    payload: user,
    };
  };

  const removeUser = () => {
    return {
    type: REMOVE_USER,
    };
  };

  export const authenticate = () => async(dispatch) => {
    const response = await fetch('/api/auth/')
    const user = await response.json();
    if (!user.errors) {
        dispatch(setUser(user));
    }
    return user;
  }

  export const signup = ( username, email, password, is_instructor ) => async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        is_instructor
      }),
    });
    const user = await response.json();
    if (!user.errors) {
      dispatch(setUser(user));
    }
    return user;
  };

  export const login = ( email, password ) => async (dispatch) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    });
    const user = await response.json();
    if (!user.errors) {
      dispatch(setUser(user));
    }
    return user;
  };

  export const demoLogin = () => async (dispatch) => {
    const response = await fetch("/api/auth/demo-login");
    const user = await response.json();
    if (!user.errors) {
    dispatch(setUser(user));
    }
    return user;
  };

  // export const restoreUser = () => async (dispatch) => {
  //   const response = await fetch("/api/auth/");
  //   const user = await response.json();
  //   dispatch(setUser(user));
  //   return user;
  // };

  export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (response.ok) {
    dispatch(removeUser());
    }
    return response.json();
  };

  const initialState = {
    user: null,
  };

  const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER:
        return { ...state, user: action.payload };
      case REMOVE_USER:
        return { ...state, user: null };
      default:
        return state;
    }
  };

// const sessionReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USER:
//       if (action.payload.errors && action.payload.errors[0] === "Unauthorized") {
//         return { ...state, user: null }
//       }
//       return { ...state, user: action.payload }
//     case REMOVE_USER:
//       return { ...state, user: null }
//     default:
//       return state;
//   }
// };
// export default sessionReducer;

  export default sessionReducer;
