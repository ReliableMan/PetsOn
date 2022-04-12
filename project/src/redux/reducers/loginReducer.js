import { initState } from '../initState';

export const loginFormReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_LOGIN_TYPING':
      return { ...state, ...payload }
    case 'CLEAR_LOGIN_INPUTS':
      return { ...payload };
    default:
      return state;
  }
}
