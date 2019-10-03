// demoComponent.jsx

import React from 'react';
import RedditContainer from './RedditContainer';

function DemoComponent({
  currentCount,
  onIncrementClick,
  onDecrementClick
}) {
  return (
    <div>
      <p>current count: {currentCount}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <RedditContainer/>
    </div>
  )
}

export default DemoComponent;