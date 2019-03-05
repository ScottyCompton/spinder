//RedditContainer.js

import { connect } from 'react-redux';
import RedditComponent from './RedditComponent';
import { demoOperations } from './duck';

const mapStateToProps = (state) => {
  const { subredditData, showRedditSpinner } = state.demo;
  return {
    subredditData,
    showRedditSpinner
  }
};

const mapDispatchToProps = (dispatch) => {
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.
  const fetchSubreddits = (subreddit) => {
      dispatch(demoOperations.fetchSubredditJson(subreddit))
    };
  
  return { fetchSubreddits };
};

const RedditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditComponent);

export default RedditContainer;