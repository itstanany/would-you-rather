import { userConstants } from './user.constants';

const states = {
  authenticated: 'authenticated',
  unauthenticated: 'unauthenticated',
  pending: 'pending',
  reset: 'reset',
};

const initialState = {
  user: {
    id: '',
    name: '',
    avatarURL: '',
    answers: {},
    questions: [],
  },
  loading: false,
  error: null,
  // authenticate: false,
  state: states.unauthenticated,
};

/**
 * Reducer treated as "state machine" for user state slice
 * @param {object} state current "user" state slice of the app
 * @param {type: string, payload: object} action dispatched action
 * @returns new state according to action type
 */
const userReducer = (state = initialState, action) => {
  let newState;
  const { type = '', payload = {} } = action;
  switch (state.state) {
    case states.unauthenticated:
    case states.reset:
      if (type === userConstants.USER_LOGIN_REQUEST) {
        newState = {
          ...state,
          state: states.pending,
          loading: true,
        };
        return newState;
      }
      break;
    case states.pending:
      switch (type) {
        case userConstants.USER_LOGIN_SUCCESS:
          newState = {
            ...state,
            loading: false,
            state: states.authenticated,
            user: payload.user,
          };
          return newState;
        case userConstants.USER_LOGIN_FAILURE:
          newState = {
            ...state,
            loading: false,
            state: states.unauthenticated,
            error: payload.error,
          };
          return newState;
        case userConstants.USER_LOGOUT_SUCCESS:
          newState = {
            ...state,
            loading: false,
            state: states.unauthenticated,
            user: initialState.user,
          };
          return newState;
        case userConstants.USER_LOGOUT_FAILURE:
          newState = {
            ...state,
            loading: false,
            error: payload.error,
            state: states.authenticated,
          };
          return newState;
        default:
          return state;
      }

    case states.authenticated:
      if (type === userConstants.USER_LOGOUT_REQUEST) {
        newState = {
          ...state,
          loading: true,
          state: states.pending,
        };
        return newState;
      }
      if (type === userConstants.RESET) {
        newState = {
          // ...initialState,
          ...state,
          state: states.reset,
        };
        return newState;
      }
      if (type === userConstants.USER_UPDATE) {
        newState = {
          ...state,
          loading: false,
          state: states.authenticated,
          user: payload.user,
        };
        return newState;
      }
      break;
    default:
      return state;
  }
  return state;
};

export {
  userReducer,
  states,
};
