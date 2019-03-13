import { connect } from 'react-redux';
import CategoriesComponent from './CategoriesComponent';
import { categoriesOperations } from './duck'; // operations.js



const mapStateToProps = state => {
	// current state properties passed down to LoginComponent (LoginComponent.js)
	const { categoryArray } = state.categories;
	return { categoryArray }
  };
  


  const mapDispatchToProps = (dispatch) => {
    // all passed in from LoginOperations (operations.js)
    const loadUserCategories = () => dispatch(categoriesOperations.loadUserCategories());
    const handleCatClick = () => dispatch(categoriesOperations.handleCatClick());
    return {
        loadUserCategories,
        handleCatClick
    }
  };
  

  const CategoriesContainer = connect(mapStateToProps,mapDispatchToProps)(CategoriesComponent);
  
  export default CategoriesContainer;
