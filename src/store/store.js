import { configureStore } from "./configureStore";
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore();

export default store;

export {
  store,
}
