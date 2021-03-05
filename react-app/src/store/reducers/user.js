const initialState = {
  user: null,
};

const SET_USER = "user/setUser";
const REMOVE_USER = "user/removeUser";

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const signup = ({ username, email, password, is_instructor }) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password, is_instructor }),
  });

  const parsedResponse = await response.json();
  dispatch(setUser(parsedResponse));
  return parsedResponse;
};

export const login = ({ email, password }) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const parsedResponse = await response.json();
  dispatch(setUser(parsedResponse));
  return parsedResponse;
};

export const demoLogin = () => async (dispatch) => {
  const response = await fetch("/api/auth/demo-login");
  const parsedResponse = await response.json();
  dispatch(setUser(parsedResponse));
  return parsedResponse;
};



export const restoreUser = () => async (dispatch) => {
  const response = await fetch("/api/auth/");
  const parsedResponse = await response.json();
  dispatch(setUser(parsedResponse));
  return parsedResponse;
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout");
  dispatch(removeUser());
  return response;
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const saveUserInfo = { ...state, user: action.user };
      return saveUserInfo;
    case REMOVE_USER:
      const removeUserInfo = { ...state, user: null };
      return removeUserInfo;
    default:
      return state;
  }
};

export default userReducer;
