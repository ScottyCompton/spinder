import React from 'react';
import { connect } from 'react-redux';
import ShopComponent from './ShopComponent';
import { shopOperations } from './duck'; // operations.js


const mapStateToProps = state => {
  // current state properties passed down to ShopComponent (ShopComponent.js)
  const { productDataArray } = state.shop;
  const { userId } = state.userSession;
  return { productDataArray, userId }
};

const mapDispatchToProps = (dispatch) => {
  // all passed in from LoginOperations (operations.js)
  const handleClickToBuy = () => dispatch(shopOperations.handleBtnClick(true));
  const handleClickToPass = () => dispatch(shopOperations.handleBtnClick(null));
  const handleClickToLike = () => dispatch(shopOperations.handleBtnClick(false));
  const initShop = (userId) => dispatch(shopOperations.initShop(userId));
  
  return {
    handleClickToLike,
    handleClickToBuy,
    handleClickToPass,
    initShop
  }
};

const ShopContainer = connect(mapStateToProps, mapDispatchToProps )(ShopComponent);

export default ShopContainer;

