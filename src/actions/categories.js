
    export const loadCats = (categoryArray) => {
        return {
            type: 'CATS_LOADCATS',
            categoryArray: categoryArray
        }
    }


    export const toggleCat = (userCategory) => {
        return {
            type: 'CATS_TOGGLECAT',
            userCategory: userCategory
         }
    }
    

    export const selectCat = (userCategory) => {
        return {
            type: 'CATS_SELECTCAT',
            userCategory: userCategory
         }
    }


    export const unSelectCat = (userCategory) => {
        return {
            type: 'CATS_UNSELECTCAT',
            userCategory: userCategory
        }        
    }


    export const doClickLike = (productData) => {
        return {
            type: 'SHOP_PRODUCTLIKE',
            productData: productData
        }        
    }
