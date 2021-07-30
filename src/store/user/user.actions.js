import { constants } from "./user.constants"

const login = ({ users, userId }) => async (dispatch) => {
  console.log('inside login action creator');
  console.log(users);
  console.log(userId)
  dispatch({
    type: constants.USER_LOGIN_REQUEST
  });

  dispatch({
    type: constants.USER_LOGIN_SUCCESS,
    payload: {
      user: users[userId]
    },
  });
}

export {
  login,
};
