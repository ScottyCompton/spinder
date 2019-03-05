// reducers.js
import types from './types';

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoading: false,
  loginErrors: '',
  displayName: '',
  userId: -1
}
const loginReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case types.HANDLE_FIELD_CHANGE: {
        const { payload } = action;
        return {
            ...state,
            [payload.currentTarget.id]: payload.currentTarget.value
        }
    }
   
    case types.SHOW_LOADING: {
        const { payload } = action;
        return {
          ...state,
          isLoading: payload
        }
    }

    case types.HANDLE_LOGIN_ERRORS: {
        const { payload } = action;
        return {
          ...state,
          loginErrors: payload,
          password: '',
          isLoading: false
        }
      }

    case types.SET_USER_SESSION: {
      const { payload } = action;
      return {
        ...state,
        userId: payload.userId,
        displayName: payload.displayName,
        isLoading: false
      }
    }

    

    default: return state;
  }
}

export default loginReducer;