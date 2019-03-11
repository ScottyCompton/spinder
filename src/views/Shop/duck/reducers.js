// reducers.js
import types from './types';


const INITIAL_STATE = {
  cartContents: [],
  productDataArray: []
}

const shopReducer = (state=INITIAL_STATE, action) => {

  switch(action.type) {
    case types.SHOP_INITSHOP: {
      const { productDataArray } = action;
      return {
        ...state,
        productDataArray: productDataArray
      }
      break;
    }

    case types.SHOP_PRODUCTLIKE: {
      const { productDataArray, cartContents } = state;
      const { productData } = action;

      const updatedProductArray = productDataArray.slice();
      const updatedCartArray = cartContents.slice();

      const productToAddArray = updatedProductArray.splice(0,1);
      const productToAdd = productToAddArray[0]
      productToAdd.toBuy = false;
      updatedCartArray.push(productToAdd);

      updatedProductArray.push(productData);
      return {
        ...state,
        productDataArray: updatedProductArray,
        cartContents: updatedCartArray
      }
    }


    case types.SHOP_PRODUCTBUY: {
      const { productDataArray, cartContents } = state;
      const { productData } = action;

      const updatedProductArray = productDataArray.slice();
      const updatedCartArray = cartContents.slice();

      const productToAddArray = updatedProductArray.splice(0,1);
      const productToAdd = productToAddArray[0]
      productToAdd.toBuy = true;
      updatedCartArray.push(productToAdd);

      updatedProductArray.push(productData);
      return {
        ...state,
        productDataArray: updatedProductArray,
        cartContents: updatedCartArray
      }
    }


    case types.SHOP_PRODUCTPASS: {
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

export default shopReducer;