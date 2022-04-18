import { initState } from '../initState';

export const userTypingService = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    
    case 'USER_TYPING_SERVICE':
      return payload;
    case 'SET_SERVICE':
      return payload;
    case 'CLEAR_INPUTS_SERVICES':
      return { ...payload };
    default:
      return state;
  }
}
