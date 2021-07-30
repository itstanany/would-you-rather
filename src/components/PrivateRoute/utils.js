import { store } from '../../store/store';

const isLoggedIn = () => {
  const state = store.getState();
  return state.user.state === 'authenticated';
}

export {
  isLoggedIn,
}