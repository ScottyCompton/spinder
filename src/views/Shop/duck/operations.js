// operations.js
import fetch from 'cross-fetch';
import Actions from './actions';
import Config from '../../../../config';


const doInit = Actions.doInit;
const doClickLike = Actions.doClickLike;
const doClickBuy = Actions.doClickBuy;
const doClickPass = Actions.doClickPass;
const localState = JSON.parse(localStorage.getItem('state'));
//const userId = 1;

//const userId = localState != null ? localState.userSession.userId : -1;




const initShop = () => {
    const userId = localStorage.getItem('userId');
        return dispatch => {
            return fetch(Config.API_ROOT + 'multiplerandomproducts/', 
                {
                    method: 'post',
                    headers: {'Content-Type':'application/json'},
                    body:   JSON.stringify({"user_id": userId,"product_count": 3})   
                })
            .then(response => response.json())
            .then(json => {
            dispatch(doInit(json));
            });
        }      
    
    
}

const doSlide = (toBuy) => {
    const productsContainer = document.getElementsByClassName('products')[0];
    const w = productsContainer.clientWidth;
    const h = productsContainer.clientHeight;
    const dimStyles = "width: " + productsContainer.clientWidth + "px; height:"+ productsContainer.clientHeight + "px;";
    
    const frontSlide = document.getElementsByClassName('productContainer')[0];
    frontSlide.setAttribute('style', dimStyles);

    if(toBuy === null) {
        frontSlide.classList.add('exec-slide-left');
    } else {
        frontSlide.classList.add('exec-slide-right');
    }
 


}


const handleBtnClick = (toBuy) => {
    const userId = localStorage.getItem('userId');
    // loads a new single product into state, adds the front product
    // to the cart if toBuy != undefined
    return dispatch => {
        doSlide(toBuy);
        setTimeout(function() {
            return fetch(Config.API_ROOT + 'multiplerandomproducts/', 
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
                    case null: {
                      dispatch(doClickPass(json[0]));
                      break;
                    }
                }
            
            });            

        },900);

      }    
}


export default {
    handleBtnClick,
    initShop
}

