
    export const doUpdateQuantity = (cartItemId, qty) => {
        return {
            type: 'CART_UPDATE_ITEMQTY',
            cartItemId: cartItemId,
            qty: qty
         }
    }


    export const doRemoveItem = (cartItemId) => {
        return {
            type: 'CART_REMOVE_ITEM_FROM_CART',
            cartItemId: cartItemId
        }        
    }


    export const doMoveItemToBuy = (cartItemId) => {
        return {
            type: 'CART_MOVE_ITEM_TO_CART',
            cartItemId: cartItemId
        }        
    }


    export const doMoveItemFromBuy = (cartItemId) => {
        return {
            type: 'CART_MOVE_ITEM_TO_FAV',
            cartItemId: cartItemId
        }        
    }


    export const doCheckout = () => {
        return {
            type: 'CART_EXECUTE_CHECKOUT'
        }        
    }
     
    
    export const doClearCart = () => {
        return {
            type: 'CART_CLEAR_CART'
        }        
    }

    
    export const doClearToBuy = () => {
        return {
            type: 'CART_CLEAR_CART_TOBUY'
        }        
    }

    
    export const doClearNotToBuy = () => {
        return {
            type: 'CART_CLEAR_CART_NOT_TOBUY'
        }        
    }

