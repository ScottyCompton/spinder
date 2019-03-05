// actions.js

/*
import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  incrementCount: ['value'],
  decrementCount: ['value'],
  requestSubredditJson: ['subreddit'],
  receiveSubredditJson: ['subredditData']
});

export default Creators;
*/

import types from './types.js';

const Creators = ({

    incrementCount: (value) => {
        return {
            type: types.INCREMENT_COUNT,
            value: value            
        }       
    },


    setUserSession: (value) => {
        return {
            type: types.SET_USER_SESSION,
            value: value
        }
    },

    
    decrementCount: (value) => {
        return {
            type: types.DECREMENT_COUNT,
            value: value
        }
    },
    
    requestSubredditJson: (subreddit) => {
        return {
            type: types.REQUEST_SUBREDDIT_JSON,
            subreddit: subreddit
        }

    },

    receiveSubredditJson: (json) => {
        return {
            type: types.RECEIVE_SUBREDDIT_JSON,
            subredditData: json
        }    
    }
    
});

export default Creators;

/*
import types from './types.js';

const incrementCount = (value) => {
    type: types.INCREMENT_COUNT,
    value: value    
};

const decrementCount = (value) => {
    type: types.DECREMENT_COUNT,
    value: value
};

const requestSubredditJson = (subreddit) => {
    type: types.REQUEST_SUBREDDIT_JSON,
    subreddit: subreddit
};
const receiveSubredditJson = (json) => {
    type: types.RECEIVE_SUBREDDIT_JSON,
    subredditData: json
}

export default {
    incrementCount,
    decrementCount,
    requestSubredditJson,
    receiveSubredditJson
}

*/