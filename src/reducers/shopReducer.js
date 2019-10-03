import shortid from 'shortid';

const INITIAL_STATE = {
  cartContents: [],
  productDataArray: []
}

export default (state=INITIAL_STATE, action) => {

  switch(action.type) {
    case 'SHOP_INITSHOP': {
      const { productDataArray } = action;
      return {
        ...state,
        productDataArray: productDataArray
      }
      break;
    }



    case 'CART_MOVE_ITEM_TO_FAV': {
      const { cartContents } = state;
      // set toBuy=false for the given item, also change the qty = 1

      const { cartItemId } = action;
      const updatedCartContents = cartContents.map((cartItem) => {
        if(cartItem.cart_item_id === cartItemId) {
          cartItem.toBuy = false;
        }
        return cartItem;
      });

      return {
        ...state,
        cartContents: updatedCartContents
      }
    }




    case 'CART_MOVE_ITEM_TO_FAV': {
      const { cartContents } = state;
      // set toBuy=false for the given item, also change the qty = 1

      const { cartItemId } = action;
      const updatedCartContents = cartContents.map((cartItem) => {
        if(cartItem.cart_item_id === cartItemId) {
          cartItem.qty = 1;
          cartItem.toBuy = false;
          cartItem.qty = 1;
          cartItem.sub_total = cartItem.price * cartItem.qty;            
        }
        return cartItem;
      });

      return {
        ...state,
        cartContents: updatedCartContents
      }
    }


    case 'CART_MOVE_ITEM_TO_CART': {
      const { cartContents } = state;
      // set toBuy=true for the given item

      const { cartItemId } = action;
      const updatedCartContents = cartContents.map((cartItem) => {
        if(cartItem.cart_item_id === cartItemId) {
          cartItem.toBuy = true;
          cartItem.qty = 1;
          cartItem.sub_total = cartItem.price * cartItem.qty;          
        }
        return cartItem;
      });

      return {
        ...state,
        cartContents: updatedCartContents
      }
    }



    case 'CART_REMOVE_ITEM_FROM_CART': {
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

    
    case 'CART_UPDATE_ITEMQTY': {
      // update qty for a given cart item
     const { cartContents } = state;
     const { cartItemId, qty } = action;


     
     const updatedCartContents = cartContents.map((cartItem) => {
       if(cartItem.cart_item_id === cartItemId) {
         cartItem.qty = qty
         cartItem.sub_total = cartItem.price * qty;
       }
       return cartItem;
     });

     return {
       ...state,
       cartContents: updatedCartContents
     }
   }
   


    case 'SHOP_PRODUCTLIKE': {
      const { productDataArray, cartContents } = state;
      const { productData } = action;
      const updatedProductArray = productDataArray.slice();
      const updatedCartArray = cartContents.slice();
      const productToAddArray = updatedProductArray.splice(0,1);
      const productToAdd = productToAddArray[0]

      productToAdd.toBuy = false;
      productToAdd.qty = 1;
      productToAdd.cart_item_id = shortid.generate();
      productToAdd.sub_total = productToAdd.price;      
      updatedCartArray.push(productToAdd);
      updatedProductArray.push(productData);

      return {
        ...state,
        productDataArray: updatedProductArray,
        cartContents: updatedCartArray
      }
    }


    case 'SHOP_PRODUCTBUY': {
      const { productDataArray, cartContents } = state;
      const { productData } = action;
      const updatedProductArray = productDataArray.slice();
      const updatedCartArray = cartContents.slice();
      const productToAddArray = updatedProductArray.splice(0,1);
      const productToAdd = productToAddArray[0];

      productToAdd.toBuy = true;
      productToAdd.qty = 1;
      productToAdd.cart_item_id = shortid.generate();
      productToAdd.sub_total = productToAdd.price;
      updatedCartArray.push(productToAdd);
      updatedProductArray.push(productData);

      return {
        ...state,
        productDataArray: updatedProductArray,
        cartContents: updatedCartArray
      }
    }


    case 'SHOP_PRODUCTPASS': {
      const { productDataArray } = state;
      const { productData } = action;
      const updatedArray = productDataArray.slice();
      updatedArray.shift();
      updatedArray.push(productData);
      
      return {
        ...state,
        productDataArray: updatedArray
      }
    }

    default: return state;
  }
}

