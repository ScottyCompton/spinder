import { connect } from 'react-redux';
import CartComponent from './CartComponent';
import { cartOperations } from './duck'; // operations.js

const mapStateToProps = state => {
	// current state properties passed down to LoginComponent (LoginComponent.js)
  const { cartContents } = state.shop;
	return { cartContents }
};
  
const mapDispatchToProps = dispatch => {
  const handleSelectNewQuantity = (cartItemId, newQty) => dispatch(cartOperations.handleSelectNewQuantity(cartItemId, newQty));
  const handleClickRemoveItem = (cartItemId) => dispatch(cartOperations.handleClickRemoveItem(cartItemId));
  const handleClickMoveItemToBuy = (cartItemId) => dispatch(cartOperations.handleClickMoveItemToBuy(cartItemId));
  const handleClickMoveItemFromBuy = (cartItemId) => dispatch(cartOperations.handleClickMoveItemFromBuy(cartItemId));
  const handleClickCheckout = () => dispatch(cartOperations.handleClickCheckout());
  const handleClickClearCart = () => dispatch(cartOperations.handleClickClearCart());
  const handleClickClearToBuy = () => dispatch(cartOperations.handleClickClearToBuy());
  const handleClickClearNotToBuy = () => dispatch(cartOperations.handleClickClearNotToBuy());

  return {
    cartItemEventHandlers: {
      handleSelectNewQuantity,
      handleClickRemoveItem,
      handleClickMoveItemToBuy,
      handleClickMoveItemFromBuy,
    },
    handleClickCheckout,
    handleClickClearCart,
    handleClickClearToBuy,
    handleClickClearNotToBuy
  }
}
  const CartContainer = connect(mapStateToProps, mapDispatchToProps)(CartComponent);
  
  export default CartContainer;
