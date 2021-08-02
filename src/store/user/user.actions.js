import { userConstants } from './user.constants';

/**
 * Thunk function action creator, dispatch actions for login process
 * @param {{users: object of current available users, userId: string}} param0
 * @returns Thunk function action creator
 */
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

/**
 * Thunk function action creator
 * Dispatch action for logout process
 * @returns Thunk function action creator
 */
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
