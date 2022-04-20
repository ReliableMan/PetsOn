import { initState } from '../initState';

export const userTypingService = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    
    case 'USER_TYPING_SERVICE':
      return { ...state, ...payload };
    case 'SET_SERVICE':
      return payload;
    case 'CLEAR_INPUTS_USER_SERVICES':
      return {};
      case 'CLEAR_INPUTS_SERVICES':
        console.log('fffffffff');
        return {};
    default:
      return state;
  }
}
