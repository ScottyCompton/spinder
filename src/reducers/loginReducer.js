
const INITIAL_STATE = {
  email: '',
  password: '',
  isLoading: false,
  loginErrors: '',
  displayName: '',
  userId: -1
}


export default (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case 'HANDLE_FIELD_CHANGE': {
        const { payload } = action;
        return {
            ...state,
            [payload.currentTarget.id]: payload.currentTarget.value
        }
    }
   
    case 'SHOW_LOADING': {
        const { payload } = action;
        return {
          ...state,
          isLoading: payload
        }
    }

    case 'HANDLE_LOGIN_ERRORS': {
        const { payload } = action;
        return {
          ...state,
          loginErrors: payload,
          password: '',
          isLoading: false
        }
      }

    case 'SET_USER_SESSION': {
      const { payload } = action;
      localStorage.setItem('userId',payload.userId);
      return {
        ...state,
        userId: payload.userId,
        displayName: payload.displayName,
        isLoading: false,
        password: ''
      }
    }

    

    default: return state;
  }
}

