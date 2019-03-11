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

const userId = localState != null ? localState.userSession.userId : -1;




const initShop = () => {

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

const handleBtnClick = (toBuy) => {
    // loads a new single product into state, adds the front product
    // to the cart if toBuy != undefined
    return dispatch => {
        return fetch(Config.API_ROOT + 'randomproduct/' + userId)
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
      }    
}


export default {
    handleBtnClick,
    initShop
}

