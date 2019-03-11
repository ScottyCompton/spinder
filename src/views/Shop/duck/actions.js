// actions. js

import types from './types.js';

const Actions = ({

    doInit: (productDataArray) => {
        return {
            type: types.SHOP_INITSHOP,
            productDataArray: productDataArray
        }
    },


    doClickBuy: (productData) => {
        return {
            type: types.SHOP_PRODUCTBUY,
            productData: productData
         }
    },


    doClickPass: (productData) => {
        return {
            type: types.SHOP_PRODUCTPASS,
            productData: productData
        }        
    },


    doClickLike: (productData) => {
        return {
            type: types.SHOP_PRODUCTLIKE,
            productData: productData
        }        
    }


    
});

export default Actions;