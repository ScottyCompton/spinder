
const categoriesReducerInitialState = {
  categoryArray: []
}

export default (state=categoriesReducerInitialState, action) => {

  switch(action.type) {
    case 'SHOW_USER_PRODUCT_CATS':
      return {
        ...state,
        userProductCats: action.userProductCats
      }

    case 'CATS_LOADCATS': 
      return {
        ...state,
        categoryArray: action.categoryArray
      }

    

    case 'CATS_TOGGLECAT': 
      //const categoryArray = state.categoryArray;
      let categoryArray = state.categoryArray.slice();
      const userCategory = action.userCategory[0];

      const catIdx = categoryArray.findIndex((cat) => {
        return cat.category_id === userCategory.category_id
      })

      categoryArray.splice(catIdx,1,userCategory)

      return {
        ...state,
        categoryArray
      }     
    

    default: return state;
  }
}
