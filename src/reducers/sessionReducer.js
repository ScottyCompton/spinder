
const INITIAL_STATE = {
  displayName: '',
  userId: ''
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case 'SET_USER_SESSION': {
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
