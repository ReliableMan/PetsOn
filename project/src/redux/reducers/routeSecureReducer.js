import { initState } from "../initState";

export const secureReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case 'AUTHORIZED':
        return true;
        case 'NOT_AUTHORIZED':
          return false;
          
        default:
          return state;
  }
}
