import { constants } from "./users.constants";

const states = {
  empty: 'empty',
  full: 'full',
  pending: 'pending',
}

const initialState = {
  users: {},
  loading: false,
  error: null,
  state: states.empty
}

// const usersMachine = {
//   initialState: initialState.state,
//   states: {
//     [states.empty]: {
//       on: {
//         [constants.GET_USER_REQUEST]: 'pending',
//       },
//     },
//     [states.pending]: {
//       on: {
//         [constants.GET_USER_SUCCESS]: 'filled'
//       }
//     }
//   }
// }


const reducer = (state = initialState, action) => {
  let newState = { ...state };
  const { type } = action;
  switch (state.state) {
    case states.empty:
      if (action.type === constants.GET_USERS_REQUEST) {
        newState.state = states.pending;
        newState.loading = true;
        newState.error = null;
      }
      return newState;
    case states.pending:
      if (type === constants.GET_USERS_SUCCESS) {
        newState.state = states.full;
        newState.users = action.payload?.users
        newState.loading = false;
        return newState;
      } else if (type === constants.GET_USERS_FAILURE) {
        newState.state = states.empty;
        newState.loading = false;
        newState.error = action.payload?.error;
        return newState;
      }
      break
    case states.full:
      if (type === constants.RESET) {
        return initialState
      }
      break
    default:
      return state;
  }
  return state;
}

export {
  reducer
}