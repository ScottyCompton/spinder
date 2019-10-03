import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';


const mapStateToProps = state => {
	// current state properties passed down to LoginComponent (LoginComponent.js)
  const { userId, displayName } = state.userSession;
  const { cartContents } = state.shop
	return { userId, displayName, cartContents }
  };
  

  const Header = connect(mapStateToProps,null)(HeaderComponent);
  
  export default Header;
