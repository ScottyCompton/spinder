import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {loadState, saveState } from './session/localStorage';



const persistedState = loadState();
const middleware = applyMiddleware(thunk, logger);
//const store = createStore(rootReducer, middleware);

const store = createStore(rootReducer, persistedState, composeWithDevTools(
    applyMiddleware(thunk, logger)
    // other store enhancers if any
  ));

  store.subscribe(() => {
    saveState(store.getState());
})

  export default store;