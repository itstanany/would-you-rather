import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

/**
 * Create redux store configuration function
 * @param {object} preLoadedState initial state for creating redux store
 * @returns redux store
 */
const configureStore = (preLoadedState) => {
  const middleWares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  const store = createStore(rootReducer, preLoadedState, composedEnhancers);
  return store;
};

export {
  configureStore,
};
