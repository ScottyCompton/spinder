// actions. js

import types from './types.js';

const Actions = ({


    doUpdateQuantity: (cartItemId, qty) => {
        return {
            type: types.CART_UPDATE_ITEMQTY,
            cartItemId: cartItemId,
            qty: qty
         }
    },


    doRemoveItem: (cartItemId) => {
        return {
            type: types.CART_REMOVE_ITEM_FROM_CART,
            cartItemId: cartItemId
        }        
    },


    doMoveItemToBuy: (cartItemId) => {
        return {
            type: types.CART_MOVE_ITEM_TO_CART,
            cartItemId: cartItemId
        }        
    },


    doMoveItemFromBuy: (cartItemId) => {
        return {
            type: types.CART_MOVE_ITEM_TO_FAV,
            cartItemId: cartItemId
        }        
    },


    doCheckout: () => {
        return {
            type: types.CART_EXECUTE_CHECKOUT
        }        
    },
     
    
    doClearCart: () => {
        return {
            type: types.CART_CLEAR_CART
        }        
    },

    
    doClearToBuy: () => {
        return {
            type: types.CART_CLEAR_CART_TOBUY
        }        
    },

    
    doClearNotToBuy: () => {
        return {
            type: types.CART_CLEAR_CART_NOT_TOBUY
        }        
    },


    
});

export default Actions;