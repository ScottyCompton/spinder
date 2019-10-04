const sessionReducerInitialState = {
  displayName: '',
  userId: ''
}

export default (state=sessionReducerInitialState, action) => {
  switch(action.type) {

    case 'SET_USER_SESSION': {
      
      const { userId, displayName } = action;
      return {
        ...state,
        userId,
        displayName
      }
    }

    default: return state;
  }
}
