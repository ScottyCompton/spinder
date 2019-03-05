// actions. js
// responsible for setting an action type and delivering
// a payload to set the next state of the store


import types from './types.js';

const Actions = ({

    handleFieldChange: (evtTarget) => {
        return {
            type: types.HANDLE_FIELD_CHANGE,
            payload: evtTarget
        }
    },

    handleLoginErrors: (error) => {
        return {
            type: types.HANDLE_LOGIN_ERRORS,
            payload: {
                isLoading: true,
                loginErrors: error
            }
        }
    },

    showLoading: () => {
        return {
            type: types.SHOW_LOADING,
            payload: true
        }
    },


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