import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { LoginOperations } from './duck'; // operations.js

const mapStateToProps = state => {
  // current state properties passed down to LoginComponent (LoginComponent.js)
  const { loginErrors, email, password, isLoading } = state.login;
  return { loginErrors, email, password, isLoading }
};

const mapDispatchToProps = (dispatch) => {
  // all passed in from LoginOperations (operations.js)
  const handleSubmit = (e, em, pwd) => dispatch(LoginOperations.handleSubmit(e, em, pwd));
  const handleFieldChange = (e) => dispatch(LoginOperations.handleFieldChange(e));
  
  return {
    handleSubmit,
    handleFieldChange
  }
};

const LoginContainer = connect(
  mapStateToProps,    // properties passed down to LoginComponent.js
  mapDispatchToProps  // dispatch-able methods passed down to LoginComponent.js
)(LoginComponent);

export default LoginContainer;

