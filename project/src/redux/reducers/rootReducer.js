import { combineReducers } from 'redux';
import { signupFormReducer } from './signUpReducer';
import { userReducer } from './userReducer';
import { loginFormReducer } from './loginReducer';
import { specialityReducer } from './userSpecialReducer';
import { secureReducer } from './routeSecureReducer';


export const rootReducer = combineReducers({
  signUpInputs: signupFormReducer,
  logInInputs: loginFormReducer,
  user: userReducer,
  userSpeciality: specialityReducer,
  isAuthorized: secureReducer,
});
