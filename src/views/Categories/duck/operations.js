// operations.js
import fetch from 'cross-fetch';
import Actions from './actions';
import Config from '../../../../config';


const loadCategories = Actions.loadCats;
const toggleCat = Actions.toggleCat;
//const unSelectCat = Actions.unSelectCat;

const localState = JSON.parse(localStorage.getItem('state'));
const userId = localState != null ? localState.userSession.userId : -1;



const loadUserCategories = () => {

        return dispatch => {
            return fetch(Config.API_ROOT + 'usercategories/' + userId)
            .then(response => response.json())
            .then(json => {
            dispatch(loadCategories(json));
            });
        }      
}


const handleCatClick = (categoryId, categoryUserId) => {

    var params = {
        method: categoryUserId !== null ? 'delete' : 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                "category_id": categoryId, 
                user_id: categoryUserId !== null ? categoryUserId : userId
            }
        )
    };

    //const toDispatch = categoryUserId !== null ? unSelectCat : selectCat;
    return dispatch => {
        return fetch(Config.API_ROOT + 'usercategories/', params)
        .then(response => response.json())
        .then(json => {
            dispatch(toggleCat(json));
        });
    } 

}

export default {
    loadUserCategories,
    handleCatClick
}

