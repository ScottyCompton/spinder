
const loginReducerIntialState = {
  email: '',
  password: '',
  displayName: '',
  userId: -1
}


export default (state=loginReducerIntialState, action) => {
    switch(action.type) {

      case 'SET_USER_SESSION': {
        const { userId, displayName } = action;
        localStorage.setItem('userId', userId);
        return {
          ...state,
          userId,
          displayName
        }
      }
    
    default: 
      return state;
  }
}

