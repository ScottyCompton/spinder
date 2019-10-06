import { history } from '../routers/AppRouter';

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



    export const initShop = (userId) => {
        return (dispatch, getState) => {

            const params = {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body:   JSON.stringify({"user_id": userId,"product_count": 3})   
            }
            return fetch(process.env.API_ROOT + 'multiplerandomproducts/', params)
                .then((response) => {
                    return response.json()
                })
                .then(json => {
                    dispatch(doInit(json));
                })      
        }        
    }


    export const doLoadProduct = (userId, toBuy) => {
        return (dispatch, getState) => {
            return fetch(process.env.API_ROOT + 'multiplerandomproducts/', 
            {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body:   JSON.stringify({"user_id": userId,"product_count": 1})   
            })
            .then(response => response.json())
            .then(json => {
                switch(toBuy) {
                    case true: {
                        dispatch(doClickBuy(json[0]));
                        break;
                    }
                    case false: {
                        dispatch(doClickLike(json[0]));
                        break;
                    }
                    default: {
                        dispatch(doClickPass(json[0]));
                        break;
                    }
                }                
            });            
        }
            
    }


    