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

    case types.CATS_SELECTCAT: {
      const { categoryArray} = state;
      const { userCategory } = action;
      // set the userId to the user value for the selected categoryId
      //const categoryId = userCategory.category_id;
      var idx = 0;
      for(cat in categoryArray) {
        if(cat.category_id === userCategory.category_id) {
          categoryArray[idx].user_id = userCategory.user_id;
          break;
        }
        idx++;
      }

      return {
        ...state,
        categoryArray: categoryArray
      }
    }


    case types.CATS_UNSELECTCAT: {
      const { categoryArray } = state;
      const { userCategory } = action;
      // set the userId = null for the selected categoryId

      var idx = 0;
      for(cat in categoryArray) {
        if(cat.category_id === userCategory.category_id) {
          categoryArray[idx].user_id = null;
          break;
        }
        idx++;
      }

      return {
        ...state,
        categoryArray: categoryArray
      }
    }

    default: return state;
  }
}

export default categoriesReducer;