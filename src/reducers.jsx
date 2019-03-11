import { combineReducers } from 'redux';
import  demoReducer  from './views/Demo/duck'
import loginReducer from './views/Login/duck';
import sessionReducer from './session/duck';
import shopReducer from './views/Shop/duck';

const rootReducer = combineReducers({
  demo: demoReducer,
  login: loginReducer,
  userSession: sessionReducer,
  shop: shopReducer
});

export default rootReducer;