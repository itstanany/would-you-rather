import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './rootReducer';

const configureStore = (preLoadedState) => {
  const middleWares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const composedEnhancers = compose(middlewareEnhancer)
  const store = createStore(rootReducer, preLoadedState, composedEnhancers);
  return store;
}

export {
  configureStore,
}
