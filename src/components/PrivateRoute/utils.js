import { store } from '../../store/store';

const isLoggedIn = () => {
  /**
   * test for user authentication status
   * Returns a boolean
   */
  const state = store.getState();
  return state.user.state === 'authenticated';
};

export {
  isLoggedIn,
};
