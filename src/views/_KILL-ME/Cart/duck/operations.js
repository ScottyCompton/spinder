// operations.js
import fetch from 'cross-fetch';
import Actions from './actions';
import Config from '../../../../config';


const handleSelectNewQuantity = Actions.doUpdateQuantity;
const handleClickRemoveItem = Actions.doRemoveItem;
const handleClickMoveItemToBuy = Actions.doMoveItemToBuy;
const handleClickMoveItemFromBuy = Actions.doMoveItemFromBuy;
const doCheckout = Actions.doCheckout;
const handleClickClearCart = Actions.doClearCart;
const handleClickClearToBuy = Actions.doClearToBuy;
const handleClickClearNotToBuy = Actions.doClearNotToBuy;
const localState = JSON.parse(localStorage.getItem('state'));

const userId = localState != null ? localState.userSession.userId : -1;


const handleClickCheckout = () => {
    return dispatch => {
        dispatch(doCheckout(userId));
    }
}

export default {
    handleSelectNewQuantity,
    handleClickRemoveItem,
    handleClickMoveItemToBuy,
    handleClickMoveItemFromBuy,
    handleClickCheckout,
    handleClickClearCart,
    handleClickClearToBuy,
    handleClickClearNotToBuy
}

