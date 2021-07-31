import { userConstants } from './user.constants';

const login = ({ users, userId }) => async (dispatch) => {
  dispatch({
    type: userConstants.USER_LOGIN_REQUEST,
  });

  dispatch({
    type: userConstants.USER_LOGIN_SUCCESS,
    payload: {
      user: users[userId],
    },
  });
};

const logOut = () => async (dispatch) => {
  dispatch({
    type: userConstants.USER_LOGOUT_REQUEST,
  });
  dispatch({
    type: userConstants.USER_LOGOUT_SUCCESS,
  });
};

export {
  login,
  logOut,
};
