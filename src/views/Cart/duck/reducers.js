// reducers.js
import types from './types';


const INITIAL_STATE = {
  cartContents: []
}

const cartReducer = (state=INITIAL_STATE, action) => {

  switch(action.type) {

    case types.CART_CLEAR_CART: {

      return {
        ...state,
        cartContents: []
      }
    }

    case types.CART_CLEAR_CART_TOBUY: {
      const { cartContents } = state;

      const updateCartContents = cartContents.filter((cartItem) => {
        return cartItem.toBuy === false;
      });

      return {
        ...state,
        cartContents: updateCartContents
      }
    }


    case types.CART_CLEAR_CART_NOT_TOBUY: {
      const { cartContents } = state;

      const updateCartContents = cartContents.filter((cartItem) => {
        return cartItem.toBuy === true;
      });

      return {
        ...state,
        cartContents: updateCartContents
      }
    }



    case types.CART_UPDATE_ITEMQTY: {
       // update qty for a given cart item

      const { cartContents } = state;
      const { cartItemId, newQty } = action;
      const updatedCartContents = cartContents.map((cartItem) => {
        if(cartItem.cart_item_id = cartItemId) {
          cartItem.qty = newQty
          cartItem.sub_total = cartItem.price * newQty;
        }
        return cartItem;
      });

      return {
        ...state,
        cartContents: updatedCartContents
      }
    }


    case types.CART_MOVE_ITEM_TO_FAV: {
      const { cartContents } = state;
      // set toBuy=false for the given item, also change the qty = 1

      const { cartItemId } = action;
      const updatedCartContents = cartContents.map((cartItem) => {
        if(cartItem.cart_item_id = cartItemId) {
          cartItem.toBuy = false;
        }
        return cartItem;
      });

      return {
        ...state,
        cartContents: updatedCartContents
      }
    }


    case types.CART_MOVE_ITEM_TO_CART: {
      const { cartContents } = state;
      // set toBuy=true for the given item

      const { cartItemId } = action;
      const updatedCartContents = cartContents.map((cartItem) => {
        if(cartItem.cart_item_id = cartItemId) {
          cartItem.toBuy = true;
        }
        return cartItem;
      });

      return {
        ...state,
        cartContents: updatedCartContents
      }
    }


    case types.CART_REMOVE_ITEM_FROM_CART: {
      const { cartContents } = state;
      const { cartItemId } = action;      
      // completely remove an item from the cartArray
      const updateCartContents = cartContents.filter((cartItem) => {
        return cartItem.cart_item_id != cartItemId;
      });

      return {
        ...state,
        cartContents: updateCartContents
      }
    }


    case types.CART_EXECUTE_CHECKOUT: {
      const { cartContents } = state;
      // clear the cart, add the contents to the orders table

      return {
        ...state,
        cartContents: updateCartContents
      }
    }


    default: return state;
  }
}

export default cartReducer;