import {clearState} from '../store/localStorage';

const sessionReducerInitialState = {
  displayName: '',
  userId: '',
  loginError: ''
}

export default (state=sessionReducerInitialState, action) => {
  switch(action.type) {

    case 'LOGIN_ERROR': {
      return {
        ...state,
        loginError: action.loginError
      }
    }


    case 'CLEAR_LOGIN_ERROR': {
      return {
        ...state,
        loginError: ''
      }
    }



    case 'SET_USER_SESSION': {
      
      const { userId, displayName } = action;
      return {
        ...state,
        userId,
        displayName
      }
    }


    case 'CLEAR_USER_SESSION': {
        localStorage.clear();
        return {
          ...state,
          userId: '',
          displayName: ''
        }
    }

    default: return state;
  }
}
