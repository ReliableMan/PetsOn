import { initState } from "../initState";

export const sun_moon_mode = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case 'SUN':
        return true;
        case 'MOON':
          return false;
          
        default:
          return state;
  }
}
