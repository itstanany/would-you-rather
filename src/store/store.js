import { configureStore } from './configureStore';

// eslint-disable-next-line
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// redux store
const store = configureStore();

export default store;

export {
  store,
};
