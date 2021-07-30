import { constants } from "./user.constants";

const states = {
  authenticated: 'authenticated',
  unauthenticated: 'unauthenticated',
  pending: 'pending',
}

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
}


const reducer = (state = initialState, action) => {
  let newState;
  const { type = '', payload = {} } = action;
  switch (state.state) {
    case states.unauthenticated:
      if (type === constants.USER_LOGIN_REQUEST) {
        console.log('inside login request')
        newState = {
          ...state,
          state: states.pending,
          loading: true,
        }
        return newState;
      }
      break
    case states.pending:
      switch (type) {
        case constants.USER_LOGIN_SUCCESS:
          newState = {
            ...state,
            loading: false,
            state: states.authenticated,
            user: payload.user,
          }
          return newState;
        case constants.USER_LOGIN_FAILURE:
          newState = {
            ...state,
            loading: false,
            state: states.unauthenticated,
            error: payload.error
          }
          return newState;
        case constants.USER_LOGOUT_SUCCESS:
          newState = {
            ...state,
            loading: false,
            state: states.unauthenticated,
            user: initialState.user
          };
          return newState;
        case constants.USER_LOGOUT_FAILURE:
          newState = {
            ...state,
            loading: false,
            error: payload.error,
            state: states.authenticated,
          }
          return newState
        default:
          return state;
      }

    case states.authenticated:
      if (type === constants.USER_LOGOUT_REQUEST) {
        newState = {
          ...state,
          loading: true,
          state: states.pending,
        }
        return newState
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


 // if (type === constants.USER_LOGIN_SUCCESS) {
      //   newState = {
      //     ...state,
      //     loading: false,
      //     state: states.authenticated,
      //     user: payload.user,
      //   }
      //   return newState;
      // }
      // if (type === constants.USER_LOGIN_FAILURE) {
      //   newState = {
      //     ...state,
      //     loading: false,
      //     state: states.unauthenticated,
      //     error: payload.error
      //   }
      //   return newState;
      // }