
    export const doInit = (productDataArray) => {
        return {
            type: 'SHOP_INITSHOP',
            productDataArray: productDataArray
        }
    }


    export const doClickBuy = (productData) => {
        return {
            type: 'SHOP_PRODUCTBUY',
            productData: productData
         }
    }


    export const doClickPass = (productData) => {
        return {
            type: 'SHOP_PRODUCTPASS',
            productData: productData
        }        
    }


    export const doClickLike = (productData) => {
        return {
            type: 'SHOP_PRODUCTLIKE',
            productData: productData
        }        
    }


    