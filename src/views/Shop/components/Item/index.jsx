import React from 'react';
import './styles.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
      return (
        <div className="item">
            <h1>Item</h1>
        </div>
      );
  }
}
export default Item