// reducers.js
import types from './types';


const INITIAL_STATE = {
  categoryArray: []
}

const categoriesReducer = (state=INITIAL_STATE, action) => {

  switch(action.type) {
    case types.CATS_LOADCATS: {
      const { categoryArray } = action;
      return {
        ...state,
        categoryArray: categoryArray
      }
      break;
    }

    case types.CATS_TOGGLECAT: {
      const { categoryArray } = state;
      const { userCategory } = action;
      // set the userId = null for the selected categoryId
      var categoryId = userCategory[0].category_id;
      var tmpCategoryArray = categoryArray.slice();

      for(var i = 0; i < tmpCategoryArray.length; i++) {
        if(tmpCategoryArray[i].category_id === categoryId) {
          tmpCategoryArray.splice(i,1,userCategory[0]);
          break;
        }
      }

      return {
        ...state,
        categoryArray: tmpCategoryArray
      }     
    }

    default: return state;
  }
}

export default categoriesReducer;