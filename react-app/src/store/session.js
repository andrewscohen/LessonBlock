  const SET_USER = "user/setUser";
  const REMOVE_USER = "user/removeUser";
  // const UPDATE_USER = '/users/updateUser';

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

  // export const updateUser = (user) => ({
  //   type: UPDATE_USER,
  //   payload: user,
  // })

  export const authenticate = () => async(dispatch) => {
    const response = await fetch('/api/auth/')
    const user = await response.json();
    if (!user.errors) {
        dispatch(setUser(user));
    }
    return user;
  }

  // export const updateOneUser = (user, userProfileImage = null) => async (dispatch) => {
  //   const {
  //     profile_image,
  //     image,
  //   } = user;

  //   const formData = new FormData();
  //   formData.append('profile_image', profile_image);

  //   if (image) formData.append('image', image);

  //   if (userProfileImage) {
  //     const res = await fetch(`/api/users/${userProfileImage}`, {
  //       method: 'PUT',
  //       body: formData,
  //     });

  //     const updatedProfile = await res.json();

  //     if (res.ok) {
  //       dispatch(updateUser(updatedProfile));
  //       return updatedProfile;
  //     } else {
  //       const errors = user;
  //       return errors;
  //     }
  //   }
  // };

  export const updateOneUser = ({username, email, password, isInstructor, profileImage}) => async (dispatch) => {
    const response = await fetch("/api/users/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        is_instructor: isInstructor,
        profile_img: profileImage
      }),
    });
    const parsedResponse = await response.json();
    if(!parsedResponse.errors) {
      dispatch(setUser(parsedResponse))
    }
    return parsedResponse;
  }


  export const signup = ({username, email, password, isInstructor }) => async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        is_instructor: isInstructor
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

  export default sessionReducer;
