import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {loadState, saveState } from './localStorage';
import sessionReducer from '../reducers/sessionReducer';
import shopReducer from '../reducers/shopReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import cartReducer from '../reducers/cartReducer';



// get the persisted state stored in localStorage
const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const appReducers = combineReducers({
    userSession: sessionReducer,
    shop: shopReducer,
    categories: categoriesReducer,
    cart: cartReducer
  });


export default () => {
    // Redux store creation

    const store = createStore(appReducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

    store.subscribe(() => {
        saveState(store.getState());
    })

    return store;
}
