import { usersConstants } from './users.constants';

const states = {
  empty: 'empty',
  full: 'full',
  pending: 'pending',
};

const initialState = {
  users: {},
  loading: false,
  error: null,
  state: states.empty,
};

// const usersMachine = {
//   initialState: initialState.state,
//   states: {
//     [states.empty]: {
//       on: {
//         [usersConstants.GET_USER_REQUEST]: 'pending',
//       },
//     },
//     [states.pending]: {
//       on: {
//         [usersConstants.GET_USER_SUCCESS]: 'filled'
//       }
//     }
//   }
// }

/**
 * Reducer treated as "state machine" for users state slice
 * @param {object} state current "users" state slice of the app
 * @param {type: string, payload: object} action dispatched action
 * @returns new state according to action type
 */
const usersReducer = (state = initialState, action) => {
  const newState = { ...state };
  const { type } = action;
  switch (state.state) {
    case states.empty:
      if (action.type === usersConstants.GET_USERS_REQUEST) {
        newState.state = states.pending;
        newState.loading = true;
        newState.error = null;
      }
      return newState;
    case states.pending:
      if (type === usersConstants.GET_USERS_SUCCESS) {
        newState.state = states.full;
        newState.users = action.payload?.users;
        newState.loading = false;
        return newState;
      } if (type === usersConstants.GET_USERS_FAILURE) {
        newState.state = states.empty;
        newState.loading = false;
        newState.error = action.payload?.error;
        return newState;
      }
      break;
    case states.full:
      if (type === usersConstants.RESET) {
        return {
          ...state,
          state: states.empty,
        };
      }
      break;
    default:
      return state;
  }
  return state;
};

export {
  usersReducer,
};
