// actions. js

import types from './types.js';

const Actions = ({

    loadCats: (categoryArray) => {
        return {
            type: types.CATS_LOADCATS,
            categoryArray: categoryArray
        }
    },


    selectCat: (userCategory) => {
        return {
            type: types.CATS_SELECTCAT,
            userCategory: userCategory
         }
    },


    unSelectCat: (userCategory) => {
        return {
            type: types.CATS_UNSELECTCAT,
            userCategory: userCategory
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