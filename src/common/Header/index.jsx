import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import store from '../../store';

const mapStateToProps = state => {
	// current state properties passed down to LoginComponent (LoginComponent.js)
  const { userId, displayName } = state.userSession;

	return { userId, displayName }
  };
  

  const Header = connect(mapStateToProps,null)(HeaderComponent);
  
  export default Header;
