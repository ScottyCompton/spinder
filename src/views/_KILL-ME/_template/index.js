import { connect } from 'react-redux';
import ShopComponent from './ShopComponent';


const mapStateToProps = state => {
	// current state properties passed down to LoginComponent (LoginComponent.js)
	const { userId, displayName } = state.login;
	return { userId, displayName }
  };
  

  const ShopContainer = connect(mapStateToProps,null)(ShopComponent);
  
  export default ShopContainer;
