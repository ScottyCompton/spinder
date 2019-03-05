// operations.js
import fetch from 'cross-fetch';
import Actions from './actions';
import Config from '../../../../config';


// these guys are gonna be used in here or passed on as props to the component
const handleFieldChange = Actions.handleFieldChange;
const handleLoginErrors = Actions.handleLoginErrors;
const setUserSession = Actions.setUserSession;
const showLoading = Actions.showLoading;
const validateURL = Config.API_ROOT + 'validateuser/';

const handleSubmit = (e, email, password) => {
    e.preventDefault();

    var postData = {
        email: email,
        password: password
    }
    return dispatch => {
        dispatch(showLoading());
       // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        //dispatch(receiveLoginResponse(subreddit));
        return fetch(validateURL, {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(postData)
        }).then(response => response.json())
            .then(response => {
                if(response.errors) {
                    dispatch(handleLoginErrors(response.errors));
                } else {
                    dispatch(setUserSession(response));
                }
                // if there is no error, update the state with the user_id and first_name, then
                // indidate a good response.  If there are errors, then update the state with
                // the error, show errors on the screen
            });
    }
};
  
  export default {
    handleSubmit,
    handleFieldChange
  }