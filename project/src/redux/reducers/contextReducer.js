import { initState } from '../initState';

export const userGoogleContext = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    
    case 'USER_TYPING_GOOGLE_CONTEXT':
      return { ...state, ...payload };
    case 'SET_GOOGLE_CONTEXT':
      return payload;
    case 'CLEAR_GOOGLE_CONTEXT':
      return {};
    default:
      return state;
  }
}
