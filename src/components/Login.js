import React, { useState, useEffect } from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TempLinks from './TempLinks'; // just for moving around during dev - remove later
import { connect } from 'react-redux';
import { doLogin, doClearLoginError } from '../actions/user-session';
import fetch from 'cross-fetch';
import { history } from '../routers/AppRouter';


const Login = (props) => {

    const [email, setEmailState] = useState('');
    const [password, setPasswordState] = useState('');
    const {loginError, loggedIn} = props;
        
    useEffect(() => {
        if(!loggedIn && loginError !== '') {
            alert('login incorrect');
            props.doClearLoginError();
        }        
    }, [loggedIn, loginError])



    const handleEmailChange = (e) => {
        setEmailState(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordState(e.target.value)
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.doLogin(email, password);
    }


    return (
        <div className="login-form">
            <Container fluid>
                <Row>
                    <Col className="page-title">
                        <h4>Welcome to Spinder! Login below to get started spending.</h4>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} md={3} sm={2} xs={0}></Col>
                    <Col lg={4} md={6} sm={8} xs={12}>
                        <div className="login-outer">
                            <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <div className="start-here text-secondary">Are you a new Spinder? <Link to="/">Start Here :-)</Link></div>
                                <div><Form.Control type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Account Email Address" required /></div>
                                <div><Form.Control type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Account Password" required /></div>
                                <div><Link to="/">Forget your password?</Link><Button variant="primary" type="submit" className="float-right">Login</Button></div>
                            </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}


  const mapStateToPrps = (state, props) => {
      return {
          loginError: state.userSession.loginError,
          loggedIn: state.userSession.userId !== ''
      }
  }

  const mapDispatchToProps = (dispatch) => {    
    return {
        doLogin: (email, password) =>{dispatch(doLogin(email, password))},
        doClearLoginError: () => {dispatch(doClearLoginError())}
    }
  }
  
  export default connect(mapStateToPrps, mapDispatchToProps)(Login);
  
  
  