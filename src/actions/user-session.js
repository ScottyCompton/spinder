
    export const doSetUserSession = (resp) => {
        return {
            type: 'SET_USER_SESSION',
            userId: resp.user_id,
            displayName: resp.first_name
        }    
    }
    