import { questionsConstants } from './questions.constants';

const states = {
  empty: 'empty',
  full: 'full',
  pending: 'pending',
};

const initialState = {
  questions: {},
  loading: false,
  error: null,
  state: states.empty,
};

const questionsReducer = (state = initialState, action) => {
  let newState;
  const { type = '', payload = {} } = action;
  switch (state.state) {
    case states.empty:
      if (type === questionsConstants.GET_Q_REQUEST) {
        newState = {
          ...state,
          loading: true,
          state: states.pending,
        };
        return newState;
      }
      break;
    case states.pending:
      if (type === questionsConstants.GET_Q_SUCCESS) {
        newState = {
          ...state,
          loading: false,
          state: states.full,
          questions: payload.questions,
        };
        return newState;
      } if (type === questionsConstants.GET_Q_FAILURE) {
        newState = {
          ...state,
          loading: false,
          error: payload.error || '',
          state: states.empty,
        };
        return newState;
      }
      break;
    case states.full:
      if (type === questionsConstants.RESET) {
        newState = {
          ...state,
          state: states.empty,
        };
        return newState;
      }
      break;
    default:
      return state;
  }
  return state;
};

export { questionsReducer };
