import { _getUsers } from '../../API/_DATA';
import { usersConstants } from './users.constants';

/**
 * getUsers thunk action creator
 * @returns Thunk Async function action creator that receive "dispatch" as an argument
 */
const getUsers = () => async (dispatch) => {
  let action = {
    type: '',
    payload: {},
  };
  action = {
    type: usersConstants.GET_USERS_REQUEST,
  };
  dispatch(action);
  const users = await _getUsers();
  if (users) {
    action = {
      type: usersConstants.GET_USERS_SUCCESS,
      payload: {
        users,
      },
    };
    dispatch(action);
    return action;
  }
  action = {
    type: usersConstants.GET_USERS_FAILURE,
    payload: {
      error: 'Failed to fetch users',
    },
  };
  dispatch(action);
  return action;
};

export {
  getUsers,
};
