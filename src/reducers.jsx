import { combineReducers } from 'redux';
import  demoReducer  from './views/Demo/duck'
import loginReducer from './views/Login/duck';
import sessionReducer from './session/duck';
import shopReducer from './views/Shop/duck';
import categoriesReducer from './views/Categories/duck';

const rootReducer = combineReducers({
  demo: demoReducer,
  login: loginReducer,
  userSession: sessionReducer,
  shop: shopReducer,
  categories: categoriesReducer
});

export default rootReducer;