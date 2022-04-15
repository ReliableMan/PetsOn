import { initState } from '../initState';

export const specialityReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_SPEC':
      return payload;
  
    default:
      return state;
  }
}
