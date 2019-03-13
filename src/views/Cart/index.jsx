import { connect } from 'react-redux';
import CartComponent from './CartComponent';


const mapStateToProps = state => {
	// current state properties passed down to LoginComponent (LoginComponent.js)
	const { cartArray } = state.cart;
	return { cartArray }
  };
  

  const CartContainer = connect(mapStateToProps,null)(ShopComponent);
  
  export default CartContainer;
