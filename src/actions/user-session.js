import {initShop} from './shop'
import { history } from '../routers/AppRouter'

    export const doSetUserSession = (resp) => {
        return {
            type: 'SET_USER_SESSION',
            userId: resp.user_id,
            displayName: resp.first_name
        }    
    }
    
    export const doLoginError = (loginError) => {
        return {
            type: 'LOGIN_ERROR',
            loginError
        }
    }

    export const doClearUserSession = () => {
        return {
            type: 'CLEAR_USER_SESSION'
        }    
    }
        
    export const doClearLoginError = () => {
        return {
            type: 'CLEAR_LOGIN_ERROR'
        }    
    }
        

 



 
    export const doLogin = (email, password) => {

        return (dispatch, getState) => {

            const postData = {
                email,
                password
            };
    
            const params = {
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(postData)
            }
    
            return fetch(process.env.API_ROOT + 'validateuser/', params)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                if(json.errors) {
                    // houston, we have a problem..
                    dispatch(doLoginError(json.errors));
                } else {
                    // user found
                    dispatch(doSetUserSession(json[0]));
                }
                return json[0]
            }).then((json) => {
                if(!json.errors) {
                    // setup the shop
                    dispatch(initShop(json.user_id))    
                    return json.user_id
                } else {
                    // how did you get here?
                    return undefined
                }
            }).then((userId) => {
                if(userId) {
                    // send them to the shop page
                    history.push('/shop');
                }
            });
        }

    }
