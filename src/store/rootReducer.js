import { combineReducers } from 'redux';
import { reducer as usersReducer } from './users/reducer';
import { reducer as userReducer } from './user';
import { reducer as questionsReducer } from './questions';

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  question: questionsReducer,
});

export default rootReducer;

export { rootReducer }