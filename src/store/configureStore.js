import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = (preLoadedState) => {
  const middleWares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const composedEnhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(rootReducer, preLoadedState, composedEnhancers);
  return store;
}

export {
  configureStore,
}
