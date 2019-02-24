import React from 'react';
import './styles.scss';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
      return (
        <div className="cart">
            <h1>Cart Contents</h1>
        </div>
      );
  }
}
export default Cart