// reducers.js
import types from './types';


const INITIAL_STATE = {
  displayName: '',
  userId: ''
}

const sessionReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case types.SET_USER_SESSION: {
      const { payload } = action;
      return {
        ...state,
        userId: payload.userId,
        displayName: payload.displayName
      }
    }

    

    default: return state;
  }
}

export default sessionReducer;