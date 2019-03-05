import { combineReducers } from 'redux';
import  demoReducer  from './views/Demo/duck'
import loginReducer from './views/Login/duck';
import sessionReducer from './session/duck';

const rootReducer = combineReducers({
  demo: demoReducer,
  login: loginReducer,
  userSession: sessionReducer,
});

export default rootReducer;