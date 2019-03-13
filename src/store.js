import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {loadState, saveState } from './localStorage';


// get the persisted state stored in localStorage
const persistedState = loadState();
const middleware = applyMiddleware(thunk, logger);


const store = createStore(rootReducer, persistedState, composeWithDevTools(
    applyMiddleware(thunk),
    applyMiddleware(logger)
    // other store enhancers if any
  ));

// listen for changes to store state, update local storage when they happen
store.subscribe(() => {
    saveState(store.getState());
})

  export default store;