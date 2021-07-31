import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

const configureStore = (preLoadedState) => {
  const middleWares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  const store = createStore(rootReducer, preLoadedState, composedEnhancers);
  return store;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  configureStore,
};
