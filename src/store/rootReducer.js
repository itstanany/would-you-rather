import { combineReducers } from 'redux';
import { usersReducer } from './users/users.reducer';
import { userReducer } from './user/user.reducer';
import { questionsReducer } from './questions/questions.reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  questions: questionsReducer,
});

export default rootReducer;

export { rootReducer };
