import { _getUsers } from "../../API/_DATA";
import { constants } from "./users.constants"

const getUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: constants.GET_USER_REQUEST
    });
    const users = await _getUsers();
    if (users) {
      dispatch({
        type: constants.GET_USER_SUCCESS,
        payload: {
          users
        },
      });
      return
    }
    dispatch({
      type: constants.GET_USER_FAILURE,
      payload: {
        error: 'Failed to fetch users',
      }
    });
    return
  }
}

export {
  getUsers,
}
