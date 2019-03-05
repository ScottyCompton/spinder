// actions. js
// responsible for setting an action type and delivering
// a payload to set the next state of the store


import types from './types.js';

const Actions = ({

    setUserSession: (resp) => {
        return {
            type: types.SET_USER_SESSION,
            payload: {
                userId: resp[0].user_id,
                displayName: resp[0].first_name
            }
        }    
    }
    
    
});

export default Actions;